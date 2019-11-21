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

Nous souhaitons faire en sorte qu'au démarrage de l'application on soit d'abord diriger vers la page de login, avant d'être redirigé vers la page d'accueil au clic sur le bouton de connexion.





