## Principes de bases

Lorsque vous lancez une application Ionic, c'est le fichier **src/index.hmlt** qui est appellé en premier.

```html
<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="utf-8" />
  <title>DuckNote</title>

  <base href="/" />

  <meta name="viewport" content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <meta name="format-detection" content="telephone=no" />
  <meta name="msapplication-tap-highlight" content="no" />

  <link rel="icon" type="image/png" href="assets/icon/favicon.png" />

  <!-- add to homescreen for ios -->
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black" />
</head>

<body>
  <app-root></app-root>
</body>

</html>
```

Ce point d'entrée de l'application permet de préciser  l'URL de base à utiliser pour recomposer toutes les URL relatives contenues dans l'application.

```html
<base href="/" />
```

On déclare ensuite le composant **AppComponent** dans le corps de la page html :

```html
<app-root></app-root>
```

Ce composant est lui-même définit dans le fichier **src/app/app.component.ts. **

```js
@Component({
  selector: 'app-root', // Il ne vous dit rien ce tag html (selecteur) ? 
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
  ...
  ];
```

C'est ce composant qui permet d'appeler le module de routage, comme on peut le voir dans le fichier **src/app/app.component.ts** :

```html
<ion-app>
  <ion-split-pane>
    <!-- ... -->
    <!-- On appelle le module de routage ici -->
    <ion-router-outlet main></ion-router-outlet>
  </ion-split-pane>
</ion-app>

```

Ce module est défini dans le fichier **src/app/app-routing.module.ts. **On y retrouve toutes les routes de notre application : 

```js
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },

  // ... autres routes...
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```

* La première entrée permet de rediriger toutes les urls "vide" \(path:' '\), mal formées ou celle par défaut, vers la page d'accueil
* La deuxième entrée permet d'afficher la page d'accueil à partir de l'url **/home**.

Dans la définition du routage, nous avons une clé _**loadChildren**_ dans laquelle nous fournissons un chemin vers le module de notre page. Ce fichier de module contient des informations et des importations pour la page. C'est en quelque sorte le moteur de la page, à l'image d'un moteur de voiture.

Grâce au tag **&lt;ion-router-outlet main&gt;&lt;/ion-router-outlet&gt;**, le routeur Angular remplacera toutes les entrées définies dans la table de routage par les informations du module associé \(HomePageModule, ProfilePageModule,...\).

Pour plus d'information sur le routage Angular, n'hésitez pas à consulter les documentations officielles :

* [https://ionicframework.com/blog/navigating-the-change-with-ionic-4-and-angular-router/](https://ionicframework.com/blog/navigating-the-change-with-ionic-4-and-angular-router/)

* [https://angular.io/guide/router](https://angular.io/guide/router)



