## Ionic storage

Basé sur la librairie LocalForage[^1], le module Ionic Storage utilise différents moteurs de stockage comme SQLite ou IndexedDB, en choisissant par défaut le moteur de stockage disponible :

* Lorsque l'application est executé dans un contexte natif, Ionic Storage donne la priorité à l'utilisation de SQLite, qui est l'une des bases de données sur fichiers les plus stables et les plus largement utilisées pour le stockage de données mobiles. L'utilisation de SQLite permet d'évite les nombreuses limitations  de mémoire rencontrées avec localstorage et IndexedDB.
* Lorsqu'il est exécuté sur le Web ou en tant qu'application Web progressive, Ionic Storage tente successivement l'utilisation d'**IndexedDB, WebSQL et localstorage**, dans cet ordre là.

Il est également tout à fait possible préciser un tout ordre que celui par défaut \(**SQLite &gt; IndexedDB &gt; WebSQL &gt; LocalStorage**\). On pourrait très bien mettre **IndexedDB** en premier et **SQLite** en dernier, même si cette configuration là est loin d'être la plus optimale.

### Installation et exemples d'utilisation

Pour installer Ionic Storage, nous allons saisir successivement les commandes suivantes :

```bash
$ ionic cordova plugin add cordova-sqlite-storage
$ npm install --save @ionic/storage
```

Il nous faut ensuite importer le nouveau module à l'intérieur du module principale, et ce afin qu'on puisse l'appeler de n'importe quelle page de l'application.

**src/app/app.module.ts**

```js
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    // ...
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),

    // ... autres imports

    IonicStorageModule.forRoot() // <!-- On importe le module ICI
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    // ...
  ],
  providers: [
    // ...
  ]
})
export class AppModule {}
```

Si vous souhaitez adapter la configuration du module Storage, vous pouvez le faire depuis le module principale \(AppModule\) :

```js
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [...],
  imports: [
    // ...
    IonicStorageModule.forRoot({
      name: '__mabase',
      driverOrder: ['indexeddb', 'sqlite', 'websql'] // D'abord IndexedDB, ensuite sqllite, puis websql
    })
  ],
  bootstrap: [...],
  entryComponents: [...],
   providers: [...]
})
export class AppModule { }
```

Une fois le module installé et configuré, il ne vous reste plus qu'à l'appeler dans n'importe quelle page ou composant \(notion que l'on étudiera plus tard\).

```js
import { Storage } from '@ionic/storage';

export class MaPage {
  constructor(private storage: Storage) {

    // Sauvegarde la valeur du login
    storage.set('login', 'charles');

    // On peut aussi stocker des éléments plus complexes
    // comme un tableau d'objets
    let mesNotes = [
      { 'id': 1, 'title': 'Une note', 'content': 'son contenu' },
      { 'id': 2, 'title': 'Une note 2', 'content': 'son contenu 2' }
    ];

    // Pas besoin d'utiliser le mot clé "this" car on est dans le constructeur
    storage.set('notes', mesNotes);


    // On peut récupérer des valeurs de tous les types
    storage.get('age').then((age) => {
      console.log(`J'ai ${age} ans`);
    });

  }

  /**
  ** Sauvegarde d'une note
  **/
  saveNote(note) {
    // Lorsque l'on est dans une méthode, on utilise le mot-clé "this"
    // pour pouvoir utiliser l'objet storage
    // Ici on sauvegarde une note avec comme clé son Identifiant (id)
    this.storage.set(note.id, note);
  }

  // ... Autres éléments de code

}
```


### Méthode set

Cette méthode du plugin Storage permet de sauvegarder une donnée en base. Elle accepte deux paramètres :
- **Une clé :** qui permet d'identifier de façon unique la donnée sauvegardée. En effet, deux clés identiques entraînerait un écrasement ou une mise à jour des données.
- **Une valeur :** ce que l'on souhaite sauvegarder

```js
  storage.set(cle, valeur)
```

Cette méthode renvoie une promesse javascript, ce qui nous permettra d'effectuer une action après sauvegarde.
Prenons par exemple le cas de la création d'un nouveau compte au sein de notre application.

On aimerait qu'après sauvegarde des données utilisateur l'on soit redirigé vers la page d'accueil. Il suffit simplement de faire

```js

  /**
  ** Création d'un compte utilisateur
  **/
  addUser(user) {
    // On ajoute le nouvel utilisateur à la liste complète des utilisateurs de
    // l'application
    this.users.push(user);

    // Avant de sauvegarder le tout en base de données
    this.storage.set('users', this.users).then((response) => {
      // Tout s'est bien passé !
      // On ajoute le login de l'utilisateur courant en "session",
      // pour le maintenir connecté
      this.storage.set('user_session', user.login);

      // Redirection vers la page d'accueil (appel d'une méthode fictive goToHome)
      this.goToHome();
    });
  }

```


### Méthode get

Cette méthode du plugin Storage permet de récupérer des données présents en base du téléphone. Elle n'accepte qu'un seul paramètre :
- **Une clé :** qui permet d'identifier de façon unique la donnée sauvegardée.

Cette méthode renvoie également une promesse JavaScript.

Il est tout à fait possible de récupérer une donnée de manière asynchrone, tout en attendant que la réalisation de la promesse.
Pour cela, on utilise le mot clé **await**. Cet opérateur permet d'attendre la résolution d'une promesse (Promise) et ne peut être utilisé qu'au sein d'une fonction asynchrone.

Une fonction asynchrone est une fonction qui est envoyé dans une pile (file d'attente) et qui peut être exécuté avant ou même après une fonction appelée avant elle.

L'opérateur **await** au sein d'une fonction asynchrone permet l'interruption de l'exécution celle-ci, en attendant la résolution de la promesse dont elle a la charge.

```js

  /**
  ** Une méthode asynchrone
  **/
  async getData() {
    // Interruption de la méthode getData
    // On attend l’exécution de la méthode get du storage
    let maDATA = await this.storage.get('uneDATA');

    // Tout s'est bien passé...
    // On peut poursuivre l'execution de la fonction getData
    this.storage('uneAutreData', `Hello world ${maDATA}`);
  }

```

Reprenons l'exemple de notre compte utilisateur. Une fois en page d'accueil, on aimerait pouvoir récupérer son *Nom*, ainsi que son *Prénom*.

```js

  /**
  ** Récupération des données de l'utilisateur dont l’identifiant est user_id
  ** Le mot-clé async permet de récupérer des données avec le mot-clé await
  **/
  async getUser() {
    // On récupère le login de l'utilisateur courant (sauvegarde en base)
    // Grâce au mot clé "await", on récupère notre donnée directement
    // autrement dit, on n'avance pas dans la méthode, avant que l'on est
    // pu récupérer la valeur de la clé 'user_session'
    let user_session = await this.storage.get('user_session');

    return this.storage.get('users').then((usersList) => {
      // On récupère tous les utilisateurs
      // Et on ne renvoie que celui dont le login est égal à user_session

      // La méthode Find permet de renvoyer la valeur d'une liste
      // selon une ou plusieurs conditions. Ici la condition est user.id égal à user_session.
      return usersList.find((user) => user.login == user_session);
    });
  }

```

### Méthode remove

Permet la suppression d'une donnée en base en fonction de la clé transmise en paramètre.

Continuons avec l'exemple précédent. Cette application permet non seulement de créer un nouveau compte et de se connecter. Mais il est également possible (évidemment) de se déconnecter.
Pour cela nous allons utiliser la méthode **remove**.

```js

   /**
   ** Déconnexion : on supprime le contenu de la clé de session
   **/
   logout() {
     this.storage.remove('user_session').then((response) => {
       // Tout s'est bien passé : affichage de la page de login
       this.goToLoginPage();
     });
   }

```


### Méthode clear

Cette méthode supprime toutes les données de la base courante. Elle est donc à utiliser en connaissance de cause :-).

```js

   /**
   ** Déconnexion : on supprime tout le contenu de l'application
   **/
   logout() {
     // Cette déconnexion est absolument radicale ! Pas de retour en arrière !
     // C'est mon dernier mot Jean-Pierre !
     this.storage.clear();
   }

```

Pour plus d'informations sur le plugin **Storage**, n'hésitez pas à consulter la documentation officielle : https://ionicframework.com/docs/building/storage

[^1]: Voir la documentation de LocalForage à cette adresse : [https://github.com/localForage/localForage\#configuration](https://github.com/localForage/localForage#configuration)
