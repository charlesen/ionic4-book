## Navigation entre les pages

### Ajout de nouvelles pages et navigation entre elles

Parce qu'une seule page  ne suffit pas toujours à faire une application, nous en avons besoin de plus ! Pour ce faire, vous pouvez utiliser l'outil en ligne de commande de Ionic, qui est une extension de celui proposé par Angular. Mais rien ne vous empêche de créer votre page manuellement, même si je ne conseille pas cette méthode.

Créons donc nos pages en ligne de commande :

```bash
$ ionic g page login
> ng generate page pages/login
CREATE src/app/login/login.module.ts (538 bytes)
CREATE src/app/login/login.page.scss (0 bytes)
CREATE src/app/login/login.page.html (124 bytes)
CREATE src/app/login/login.page.spec.ts (684 bytes)
CREATE src/app/login/login.page.ts (252 bytes)
UPDATE src/app/app-routing.module.ts (1235 bytes)
[OK] Generated page!

# ...

$ ionic g page pages/settings
```

Ces nouvelles pages seront automatiquement ajouté à la table de routage de notre application :

**src/app/app-routing.module.ts**

```js
// ... Autres entrées
{ path: 'login', loadChildren: './login/login.module#LoginPageModule' },
{ path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },


// ...
```

Editons à présent la page de Login, de manière à être redirigé vers la page d'accueil au clic sur le bouton de connexion :

**src/app/login/login.page.html**

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

  <ion-button expand="block" routerLink="/home" routerDirection="root" color="ducknote">
    Se connecter
  </ion-button>
</ion-content>
```

En cliquant sur le bouton **"Se connecter"**, on est tout de suite redirigé vers la page, presque sans transition. C'est la directive _**routerDirection="root"**_ qui permet cette animation de type "changement de page principale" entre les pages. On aurait pu également utiliser les transition forward et backward suivantes :

* _routerDirection="forward"_ : fondu en entrée
* routerDirection="back" :  fondu en sortie

Comme prévu, en affichant la page de login \([http://localhost:8100/login](http://localhost:8100/login)\) et en cliquant sur le bouton \_**"Se connecter**", \_on arrive bien sur la page d'accueil.

| Page de login | Page d'accueil |
| :--- | :--- |
| ![](/assets/ducknote_login_1.png) | ![](/assets/page_accueil.png) |

Pour le moment la page d'accueil reste quand même la page par défaut.Nous allons pouvoir faire en sorte que la page par défaut soit désormais la page de login. Pour cela, modifions notre table de routage comme ceci :

**src/app/app-routing.module.ts**

```js
const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },


  // La page par défaut devient la page de Login
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  // ... Autres routes

]
```

Voilà, après rafraichissement, vous constaterez que toute ouverture de l'application nous redirigera par défaut vers la page de login

### Protection de pages avec les Guards angular

Il est souvent nécessaire de protéger certains contenus et ne les afficher que selon certaines conditions : utilisateur connecté, abonnement premium, ... Dans ces cas là, Angular propose une solution très pratique appelée Guards. Ceux-ci vont permettre de contrôler l'accès à une "route" particulière ou encore s'assurer que le passage d'une route à une autre se déroule selon les standards : alerte en cas de sortie d'un formulaire non enregistré ou de perte de connection au moment de la validation d'une action,...

Pour mettre en place ce mécanisme de protection, nous allons saisir la commande suivante :

```bash
$ ionic g guard guards/auth
```



Puis modifions le fichier qui a été généré pour qu'il ressemble à ceci:

**src/app/guards/auth.guard.ts**

```js
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    let userAuthenticated = false; // Pour le moment nous allons garder cette valeur à false

    if (userAuthenticated) {
      return true;
    } else {
      return false;
    }
  }
}

```

Notre **«gardien»** n'implémente qu'une seule méthode : _**canActivate. **_Celle-ci permet, selon un critère donné, d'afficher ou non une route. Ici notre condition est simplement basée sur la valeur de la variable  _**userAuthenticated**_, que l'on pourra plus tard récupérer depuis la session ou en base de données.



Pour le moment, ce gardien n'est pas vraiment utile. Pour qu'il le soit, il va nous falloir l'appeler depuis la table de routage :

 **src/app/app-routing.module.ts**

```
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  // La page par défaut devient la page de Login
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  
  // Pas d'accès la page d'accueil si non connecté
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },

  //... On configure la Page Note
  // locahost/note redirigera vers la page d'accueil
  { path: 'note', redirectTo: 'home', pathMatch: 'full' },

  // locahost/note:id affichera le détail de la note
  { path: 'note/:id', loadChildren: './note/note.module#NotePageModule' },

  // Composants Ionic
  { path: 'composants', loadChildren: './composants/composants.module#ComposantsPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

```

Dans cette nouvelle configuration, nous interdisons tout accès à la page d'accueil si l'on est pas connecté \(userAuthenticated à false\). 

Si vous tenter de nouveau de cliquer sur le bouton de connexion, rien ne se passe. En modifiant la valeur de la variable  _**userAuthenticated**_ en la passant à _**true**_, on peut de nouveau d'afficher la page d'accueil.

