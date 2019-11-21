## Ionic storage

Basé sur la librairie LocalForage[^1], le module Ionic Storage utilise différents moteurs de stockage comme SQLite ou IndexedDB, en choisissant par défaut le moteur de stockage disponible :

* Lorsque l'application est executé dans un contexte natif, Ionic Storage donne la priorité à l'utilisation de SQLite, qui est l'une des bases de données sur fichiers les plus stables et les plus largement utilisées pour le stockage de données mobiles. L'utilisation de SQLite permet d'évite les nombreuses limitations  de mémoire rencontrées avec localstorage et IndexedDB.
* Lorsqu'il est exécuté sur le Web ou en tant qu'application Web progressive, Ionic Storage tente successivement l'utilisation d'IndexedDB, WebSQL et localstorage, dans cet ordre là. 

Il est également tout à fait possible préciser un tout ordre que celui par défaut \(SQLite &gt; IndexedDB &gt; WebSQL &gt; LocalStorage\). On pourrait très bien mettre IndexedDB en premier et SQLite en dernier, même si cette configuration là est loin d'être la plus optimale.

### Installation et exemples d'utilisation

Pour installer Ionic Storage, nous allons successivement les commandes suivantes :

```bash
$ ionic cordova plugin add cordova-sqlite-storage
$ npm install --save @ionic/storage
```

Il nous faut ensuite importer le nouveau module à l'intérieur du module principale, et ce afin qu'on puisse l'utiliser de n'importe ou dans l'application.

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
    IonicStorageModule.forRoot()
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

Si vous souhaitez adapter la configuration du module, vous pouvez le faire depuis le module principale \(AppModule\) :

```js
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [...],
  imports: [
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

Une fois le module installé et configuré, il ne vous reste plus qu'à l'appeler dans n'importe laquelle de vos pages ou composant \(notion que l'on étudieras plus tard\).

```js
import { Storage } from '@ionic/storage';

export class MyApp {
  constructor(private storage: Storage) { }

  ...

  // Sauvegarde la valeur du login
  storage.set('login', 'charles');

  // On peut aussi stocker des éléments plus complexe
  let mesNotes = [
      { 'id': 1, 'title': 'Une note', 'content': 'son contenu' },
      { 'id': 2, 'title': 'Une note 2', 'content': 'son contenu 2' }
    ];

  storage.set('notes', mesNotes);


  // On peut récupérer des valeurs
  storage.get('age').then((age) => {
    console.log(`J'ai ${age} an`);
  });
}
```

[^1]: Voir la documentation de LocalForage à cette adresse : [https://github.com/localForage/localForage\#configuration](https://github.com/localForage/localForage#configuration) 

