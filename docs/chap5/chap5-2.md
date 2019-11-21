## Navigation entre les pages

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



En cliquant sur le bouton de Connexion, on est tout de suite redirigé vers la page. la directive _**routerDirection="root"**_ permet une animation de faire une animation de type "changement de page principale" entre les pages. On aurait également utiliser les valeurs suivantes :

* _routerDirection="forward"_ : fondu en entrée
* _routerDirection="backward" : _fondu en sortie





