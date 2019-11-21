## Exercez-vous

Notre application commence à prendre forme. N'hésitez pas à revenir sur les notions étudiées aux chapitres 3 et 4.

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

6\) Nous allons faire en sorte que le gards que nous avons créé plus haut prenne en cpmpte l'état de connexion de l'utilisateur stockée en base de données. Modifions le fichier comme ceci : 





