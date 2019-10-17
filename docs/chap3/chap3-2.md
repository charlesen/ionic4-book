## Templates et création de nouvelles pages

### Racine de toutes les pages

Nous allons nous intéresser un peu au fichier **src/app/app.component.html**. C'est en effet à partir de lui que seront **"générées"** toutes les autres pages.

```html
<!--  Autres éléments html ...-->
<ion-router-outlet main></ion-router-outlet>
<!-- ... -->
```

On y définit un tag ion-router-outlet qui encapsulera le composant à afficher selon le routage courant (url). Toute la logique de routage (notion que l'on abordera plus tard) est gérée dans le fichier **src/app/app-routing.module.ts**.

```javascript

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
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}


```

### Création d'une nouvelle page

Pour créer une nouvelle page, il vous suffit de saisir la commande **ionic g page LeNomDeLaPage**  :

```
$ ionic g page Profile

> ng generate page Profile
CREATE src/app/profile/profile.module.ts (548 bytes)
CREATE src/app/profile/profile.page.scss (0 bytes)
CREATE src/app/profile/profile.page.html (126 bytes)
CREATE src/app/profile/profile.page.spec.ts (698 bytes)
CREATE src/app/profile/profile.page.ts (260 bytes)
UPDATE src/app/app-routing.module.ts (682 bytes)
[OK] Generated page!

```

_**"g"**_ pour _**"generate"**_.

Dans cet exemple, j'ai créé une nouvelle page qui va nous permettre d'afficher un profil utilisateur. Cette commande m'a automatiquement générer un certain nombre de fichiers dont le triplet : **fichier .ts + fichier .html + fichier .scss**.

![](/assets/screen_22.png)

**src/app/profile/profile.page.ts**

```js
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

```

**src/app/profile/profile.page.html**

```html
<ion-header>
  <ion-toolbar>
    <ion-title>Profile</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>

</ion-content>

```

De plus, le module de routage a été automatiquement mis à jour pour nous.

```javascript
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
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },

  // Une nouvelle entrée pour le profil
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' }
];
```

Allez à l'adresse : http://localhost:8200/profile pour afficher votre page de profil.
