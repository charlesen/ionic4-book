## Deuxième Application : DuckTweet

Nous allons créer une application qui sera une version simplifiée de Tweeter.

Cela va nous aider à mettre en application tout ce que nous avons appris jusqu'à présent.


![](/assets/ducktweet_maquette.jpg)


La couleur bleue utilisée par Twitter correspond au code hexadécimal **#1da1f2**.

### Création de l'application

Nous allons utiliser le template *tabs* pour créer une application comportant des onglets.Nous choisirons Angular comme Framework à utiliser.

```bash
$ ionic start ducktweet tabs --type=angular
✔ Preparing directory ./ducktweet - done!
✔ Downloading and extracting tabs starter - done!

Installing dependencies may take several minutes.


$ cd ducktweet # On accède au dossier créé
$ ls -al # on y retrouve tous les fichiers propres à un projet Ionic Angular

total 520
drwxr-xr-x   6 charles charles   4096 déc.   5 12:04 .
drwxrwxr-x   6 charles charles   4096 déc.   5 12:03 ..
-rw-r--r--   1 charles charles   5260 déc.   4 00:13 angular.json
-rw-r--r--   1 charles charles    430 déc.   4 00:13 browserslist
drwxr-xr-x   3 charles charles   4096 déc.   5 12:03 e2e
drwxr-xr-x   8 charles charles   4096 déc.   5 12:04 .git
-rw-r--r--   1 charles charles    389 déc.   4 00:13 .gitignore
-rw-r--r--   1 charles charles     69 déc.   5 12:03 ionic.config.json
-rw-r--r--   1 charles charles    981 déc.   4 00:13 karma.conf.js
drwxr-xr-x 780 charles charles  28672 déc.   5 12:04 node_modules
-rw-r--r--   1 charles charles   1705 déc.   5 12:03 package.json
-rw-r--r--   1 charles charles 433827 déc.   5 12:04 package-lock.json
drwxr-xr-x   6 charles charles   4096 déc.   5 12:03 src
-rw-r--r--   1 charles charles    210 déc.   4 00:13 tsconfig.app.json
-rw-r--r--   1 charles charles    546 déc.   4 00:13 tsconfig.json
-rw-r--r--   1 charles charles    295 déc.   4 00:13 tsconfig.spec.json
-rw-r--r--   1 charles charles   1847 déc.   4 00:13 tslint.json

```

Il ne vous reste plus qu'à lancer votre application avec **ionic lab** ou **ionic serve**.
```bash

$ ionic lab

Install @ionic/lab? (Y/n) # on saisit "Y" pour installer Ionic Lab.

```

![](/assets/ducktweet_1.png)

### Mise en page et style CSS

Nous allons à présent adapter notre application pour qu'il colle au style de notre maquette.

Créons une nouvelle couleur, comme nous l'avons avec Ducknote.

Pour cela nous avons le choix entre éditez directement le fichier **variables.scss** ou alors utiliser le générateur de couleur proposé par Ionic. Nous allons opter pour la deuxième option.


Depuis l'adresse https://ionicframework.com/docs/theming/color-generator, éditons n'importe quelle couleur.

Choisissons la couleur **primary** par exemple et remplaçons simplement **#3880ff** par **#1da1f2**.

![](/assets/ducktweet_2.png)

Il vous suffit ensuite de copier le code généré, l'ajouter au fichier variables.scss et remplacer toutes les occurrences de **primary** par le nom de votre couleur.

![](/assets/ducktweet_3.png)

**src/theme/variables.scss**

```css

--ion-color-ducktweet: #1da1f2;
--ion-color-ducktweet-rgb: 29,161,242;
// Modification de cette valeur pour avoir #ffffff au lieu #000000
--ion-color-ducktweet-contrast: #ffffff;
--ion-color-ducktweet-contrast-rgb: 0,0,0;
--ion-color-ducktweet-shade: #1a8ed5;
--ion-color-ducktweet-tint: #34aaf3;


/* Autres couleurs ... */

```

Vous êtes bien sûr libre d'adapter ce code couleur à vos envie.
Par exemple, nous avons modifier la troisième ligne pour avoir **#ffffff** au lieu **#000000**

Nous allons ensuite ajouter cette couleur dans le style global de l'application :

**src/global.css**

```css
// On applique le style à toutes les pages
.ion-color-ducktweet {
  --ion-color-base: var(--ion-color-ducktweet);
  --ion-color-base-rgb: var(--ion-color-ducktweet-rgb);
  --ion-color-contrast: var(--ion-color-ducktweet-contrast);
  --ion-color-contrast-rgb: var(--ion-color-ducktweet-contrast-rgb);
  --ion-color-shade: var(--ion-color-ducktweet-shade);
  --ion-color-tint: var(--ion-color-ducktweet-tint);
}
```

Modifions à présent la page d'accueil pour que la couleur de la barre de navigation corresponde à celle que nous venons de créer

**src/app/tab1/tab1.page.html**

```html

<ion-header>
  <!-- On ajoute la nouvelle couleur ici -->
  <ion-toolbar color="ducktweet">
    <ion-title>
      <!-- On modifie aussi le titre de la page-->
      DuckTweet
    </ion-title>
  </ion-toolbar>
</ion-header>

<!-- Autres éléments de la page -->

```
On obtient le résultat suivant
![](/assets/ducktweet_4.png)

### Mise en place du service Tweet
