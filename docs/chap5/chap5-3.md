## Exercez-vous

Notre application commence à prendre forme. N'hésitez pas à revenir sur les notions étudiées aux chapitres 3 et 4.
Vous pouvez consulter les développements déjà effectués sur Github et ainsi vous mettre à niveau : https://github.com/charlesen/ducknote.

Nous allons à présent mettre en application ce que nous avons étudié dans ce chapitre 5.

1\) Créez la page de Login comme décrite dans ce chapitre 5 : _**Navigation entre les pages &gt; Ajout de nouvelles pages et navigation entre elles**_

```
$ ionic g page login
```

Ajustez votre code de façon à obtenir le résultat suivant :

![](/assets/ducknote_login_1.png)

2\) Faites en sorte qu'au clic sur le bouton "Se connecter" on puisse accéder à la page d'accueil.

| Page de login | Page d'accueil |
| :--- | :--- |
| ![](/assets/ducknote_login_1.png) | ![](/assets/page_accueil.png) |

3\) Modifier la page de routage pour faire de la page de Login la page par défaut

[http://localhost:8100/](http://localhost:8100/) Redirige vers [http://localhost:8100/login](http://localhost:8100/)

4\) Mettez en place le système de gards présenté dans ce chapitre.

```
$ ionic g guard guards/auth
```

Faites en sorte qu'on ne puisse afficher la page d'accueil qu'à la seule condition d'être «connecté»

5\) Nous allons à présent installer le module Ionic Storage pour sauvegarder l'état de connexion en base de donnée.

Pour cela, saisissez les commandes suivantes depuis votre terminal:

```
$ ionic integrations enable cordova --add
$ ionic cordova plugin add cordova-sqlite-storage
$ npm install --save @ionic/storage
```

Editez ensuite le fichier **src/app/app.module.ts** :

```js
//...Autres imports...

// Import du module de Storage ICi
import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot() // Ajout du module de storage ici
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

Nous allons à présent modifier l'action qui s'effectuer au clic sur le bouton de connexion pour dans l'ordre :

* Sauvegarder le statut de connexion de l'utilisateur
* Rediriger ensuite vers la page d'accueil

Dans le fichier **src/app/login/login.page.html**, apportez les ajustements suivants :

```html
<ion-header>
  <ion-toolbar color="ducknote">
    <ion-title>Ducknote</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding">
  <ion-card>
  <ion-card-header>
    <ion-card-title class="ion-text-center">Connexion</ion-card-title>
  </ion-card-header>

  <ion-card-content class="ion-text-center">
    Bienvenue sur DuckNote : <br />
    Le pense-bête qu'il vous faut !
  </ion-card-content>
</ion-card>

  <!-- <ion-button expand="block" routerLink="/home" routerDirection="root" color="ducknote">
    Se connecter
  </ion-button> -->

  <ion-button expand="block" color="ducknote" (click)="login()">
    Se connecter
  </ion-button>

</ion-content>
```

Puis le fichier **src/app/login/login.page.ts**

```js
import { Component, OnInit } from '@angular/core';

// On importer le router + module de stockage
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private storage: Storage) { }

  ngOnInit() {}

  /**
  ** Permet de stocker l'état de connexion + Redirection vers la page d'accueil
  **/
  login() {

    // Sauvegarde de l'état de connexion
    storage.set('userAuthenticated', true);

    // Redirection vers la page d'accueil
    this.router.navigate(['/home']);
  }

}
```

6\) Nous allons faire en sorte que le gards que nous avons créé plus haut prenne en cpmpte l'état de connexion véritable de l'utilisateur stockée en base de données. Modifions le fichier _**src/app/guards/auth.guard.ts**_ comme ceci :

```js
import { Injectable } from '@angular/core';
// On rajoute le Router
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

// Import du module de stockage ici
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  // Dans le constructeur on déclare notre variable de routage
  constructor(private router: Router, private storage: Storage) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // let userAuthenticated = true; // Pour le moment nous allons garder cette valeur à false

    // On récupère la valeur de userAuthenticated en BDD
    return this.storage.get('userAuthenticated').then((userAuthenticated) => {
      if (userAuthenticated) {
        // Déjà connecté : on redirige l'utilisateur vers la page d'accueil
        return true;
      } else {
        // return false;
        // Non connecté : on redirige l'utilisateur vers la page de Login
        this.router.navigate(['/login']);
      }
    });

  }
}
```

Voilà, désormais si vous avez cliqué sur le bouton de connexion et donc que vous êtes passé en mode «connecté», vous pourrez afficher la page d'accueil sans être redirigé vers la page de login.

Une petite vérification depuis le navigateur chrome permet de voir la valeur stockée en base de données \(IndexedDB\)

![](/assets/ionic_sql_indexeddb.png)

7\) Ajoutons un bouton de déconnexion en modifiant le fichier src/app/app.

Modifiez à présent le fichier **src/app/app.component.ts** en ajoutant une méthode logout permettant de supprimer l'état de connexion

```js
// ... Autres imports ...

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root', // Il ne vous dit rien ce tag html (selecteur) ?
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  // ...

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router : Router,
    private storage: Storage
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  // Bouton de déconnexion : suppression du statut de connexion
  logout() {
    this.storage.remove('userAuthenticated');
    this.router.navigate(['/login']);
  }
}
```

Puis le fichier html :

**src/app/app.component.html**

```
<ion-list>
  <!-- ...Autres éléments de la liste -->

  <ion-menu-toggle auto-hide="false">
    <ion-button expand="block" color="ducknote" (click)="logout()">
      Se déconnecter
    </ion-button>
  </ion-menu-toggle>

</ion-list>
```

![](/assets/ducknote_logout.png)

Cliquez sur le bouton de Déconnexion. Que se passe t-il ?
