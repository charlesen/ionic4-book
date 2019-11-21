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

### Protection de pages avec les Guards angular

Il est souvent nécessaire de protéger certains contenus et ne les afficher que selon certaines conditions : utilisateur connecté, abonnement, ... Dans ce cas, Angular propose une solution très pratique appelée Guards. Ceux-ci vont permettre de contrôler l'accès à une "route" particulière ou le fait de passer d'une route à une autre  \(sortie d'un formulaire non enregistré, perte de connection au moment de la validation d'une action,...\).

