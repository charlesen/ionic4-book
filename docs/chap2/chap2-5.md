## Exercez-vous

1\) Créez, si ce n'est déjà fait, l'application **ducknote** comme expliqué précédemment \(Voir le sous-chapitre [_**Première application Ionic**_](/chap2/chap2-3.md)\). Démarrez l'application avec _**ionic lab**_.

```
$ ionic start ducknote
$ cd ducknote
$ ionic lab
```

2\) Faites le tour du dossier **ducknote** pour découvrir un petit peu l'architecture de l'application
```bash
$ ls -al
total 528
-rw-rw-r--   1 charles charles   5260 oct.  17 19:04 angular.json
-rw-rw-r--   1 charles charles    430 oct.  17 19:04 browserslist
drwxrwxr-x   3 charles charles   4096 oct.  17 19:04 e2e
-rw-rw-r--   1 charles charles     68 oct.  17 19:04 ionic.config.json
-rw-rw-r--   1 charles charles    981 oct.  17 19:04 karma.conf.js
-rw-rw-r--   1 charles charles   1073 oct.  17 19:04 LICENSE
drwxrwxr-x 786 charles charles  24576 oct.  17 19:07 node_modules
-rw-rw-r--   1 charles charles   1767 oct.  17 19:04 package.json
-rw-rw-r--   1 charles charles 452257 oct.  17 19:04 package-lock.json
-rw-rw-r--   1 charles charles     50 oct.  17 19:04 README.md
drwxrwxr-x   6 charles charles   4096 oct.  17 19:04 src
-rw-rw-r--   1 charles charles    210 oct.  17 19:04 tsconfig.app.json
-rw-rw-r--   1 charles charles    546 oct.  17 19:04 tsconfig.json
-rw-rw-r--   1 charles charles    295 oct.  17 19:04 tsconfig.spec.json
-rw-rw-r--   1 charles charles   1847 oct.  17 19:04 tslint.json
```

Étudiez en particulier le dossier **src**. Comment se compose la page d'accueil ?

3\) Éditez le fichier **src/theme/variables.scss** pour créer la couleur **ducknote** présentée dans le sous-chapitre [_**Première application Ionic**_](/chap2/chap2-3.md):

```css
  :root {
    /** ducknote **/
    --ion-color-ducknote: #f1b004;
    --ion-color-ducknote-rgb: 244, 244, 244;
    --ion-color-ducknote-contrast: #000000;
    --ion-color-ducknote-contrast-rgb: 0, 0, 0;
    --ion-color-ducknote-shade: #d7d8da;
    --ion-color-ducknote-tint: #f5f6f9;

    /** .... d'autres lignes de code en dessous **/
```

Dans le fichier **src/app/home/home.page.html**, effectuez les modifications suivantes

```html
<ion-header>
  <ion-toolbar color="ducknote"> <!-- On ajoute la nouvelle couleur -->
    <ion-buttons slot="start">
      <ion-menu-button></ion-menu-button>
    </ion-buttons>
    <ion-title>
      DuckNote
    </ion-title><!-- On change l'intitulé de la page-->
  </ion-toolbar>
</ion-header>

<ion-content>
  ...
</ion-content>
```

Que s'est-il passé ?

4) Modifier le menu latéral pour obtenir le résultat ceci :
![](/assets/ionic_error2.png)

**Petite Astuce** : Saisissez la commande **git grep "List"** pour retrouver vos petits.

6\) Adaptez le code hexadécimal de la couleur ducknote pour qu'il soit le plus proche de vos goûts. Le meilleur code couleur sera utilisé dans la suite du projet :-\)

7\) Renommez les fichiers **about.html** en **mining.html**, **about.scss** en **mining.scss**, **about.scss** en **mining.scss**, **about.ts** en **mining.ts**. Puis, renommer le dossier **about** \(src/pages/about\) en **mining** \(src/pages/mining\).

Dans le fichier **mining.ts**, remplacez **AboutPage** par **MiningPage**.

Que se passe-t-il dans la console ? Dans votre navigateur ? Quelles solutions proposeriez-vous ? Voir par exemple le contenu du fichier src/pages/mining/mining.ts.

![](/assets/ionic_error2.png)

8\) Éditer le fichier **src/app/app.module.ts** de manière à corriger le maximum d'erreurs.

9\) Effectuez les actions précédentes pour l'onglet Portefeuille \(renommage + résolutions de bugs\) : **contact.html** en **wallet.html**, **contact.scss** en **wallet.scss**, **contact.scss** en **wallet.scss**, **contact.ts** en **wallet.ts**.

![](/assets/screen_duck_2.png)

10\) Ajustez le style CSS de la page d'accueil pour rendre le contenu de l'onglet un peu plus joli : **src/pages/home/home.scss**. N'hésitez pas utiliser l'inspecteur de votre navigateur \(F12\).

11\) Nous allons à présent lier notre application au service Ionic PRO. Dans votre invite de commandes, faites :

```
$ ionic link
✔ Looking up your apps - done!

? Which app would you like to link (Use arrow keys)
❯ Create a new app
  Duckcoin-starter (94d675be)
  Duckcoin (20e8461e)
```

Dans la liste qui vous est proposée, choisir l'application que vous avez créée depuis votre espace Ionic PRO.

Il vous sera également proposé d'héberger votre application soit sur Github, soit sur le cloud Ionic. Pour les raisons de ce TP nous utiliserons Ionic PRO, mais vous pouvez très bien aussi utilisé github \(votre code source sera alors public\).

```
> ionic git remote
> git remote add ionic git@git.ionicjs.com:charlesen/ducknote-starter.git
[OK] Added remote ionic.
[OK] Project linked with app 94d675be!
```

Editez ensuite le fichier **ionic.config.json**. Que remarquez-vous ?

[^1]: Ubuntu Ionic Installer : [https://github.com/nraboy/ubuntu-ionic-installer/blob/master/ubuntu\_ionic\_installer.sh](https://github.com/nraboy/ubuntu-ionic-installer/blob/master/ubuntu_ionic_installer.sh)

[^2]: _How to prevent permission errors_ : [https://docs.npmjs.com/getting-started/fixing-npm-permissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions)
