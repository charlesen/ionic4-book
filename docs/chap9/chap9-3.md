## Services/Providers

Comme nous l'avons vu, un composant permet d'afficher du contenu à plusieurs endroits à partir d'un code unique. C'est le cas par exemple du composant **&lt;feed&gt;&lt;/feed&gt;** que l'on peut appeler dans n'importe qu'elle template html de notre application.

Supposons que l'on souhaite récupérer la liste des dernières feeds sous forme de tableau comme c'est le cas dans la classe **FeedComponent** :

```js
export class FeedComponent {

  feeds: any[] = [];

  constructor(private http: HttpClient) {
    this.http.get(`${apiUrl}`).subscribe(
      data => {
      this.feeds = data['body']['results'];
    }, err => {
        console.log("Erreur !")
    });
  }

}
```

Une première solution serait de copier le code de cette classe. Mais si une autre page souhaite également avoir accès à cette même liste, la copie alors apparaît comme une mauvaise solution.

C'est là qu'interviennent les **Services**, qui sont en fait des bouts de codes métiers, des méthodes, qui peuvent être appelés dans d'autres pages, sans devoir les réécrire. On code une fois, on les réutilise partout.

Nous aurons par exemple besoin des services pour la gestion des sessions utilisateurs. En effet, à peu près toutes les pages de notre application auront besoin de s'assurer que notre utilisateur courant est bien connecté. Et pour ne pas dix mille fois implémenter la fonction vérifiant l'état de connexion d'un utilisateur, on va créer un service dédié à cela.

```bash
$ ionic g provider User

[OK] Generated a provider named User!
```

Cette commande va créer un nouveau service **User**, dans lequel nous déclarerons un certain nombre de méthodes pour la gestion de l'authentification, la création de comptes utilisateur,...Il suffira ensuite d'appeler ce service dans n'importe quelle page de notre application

```js
export class MaPage {

  isConneted: any[] = [];
  userData;

  constructor(private http: HttpClient, userProvider:User) {
    this.isConnected = this.userProvider.getUserStatus();
  }

  getUserData() {
    this.userProvider.getUserData().subscribe(data => {
        this.userData = data['feeds'];
      }, err => {
          console.log("Error occured.")
      });
  }
}
```
