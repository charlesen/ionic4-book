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

4) Modifier le menu latéral pour obtenir le résultat suivant :

| AVANT | APRÈS |
| :--- | :--- |
| ![](/assets/ducknote_menulat_1.png) | ![](/assets/ducknote_menulat_2.png) |

**Petite Astuce** : Saisissez la commande **git grep "List"** pour retrouver vos petits.


5\) Modifier la page d'accueil de manière à obtenir ce résultat :

| AVANT|
| :--- |
| ![](/assets/ducknote_home_hero_1.png)|

| APRÈS|
| :--- |
| ![](/assets/ducknote_home_hero_2.png)|

L'image de fond utilisée dans la version finale se trouve à l'adresse : https://unsplash.com/photos/82TpEld0_e4

6) Après avoir testé notre application sur un navigateur, il est temps à présent de le tester sur smartphone. Pour cela, nous allons créer un compte Ionic AppFlow (version gratuite) sur https://ionicframework.com/appflow.

Une fois le compte Appflow créé, vous pourrez installer l'application Ionic Dev App sur votre téléphone. Lancez-là, en veillant à connecter votre téléphone au même réseau wifi que celui de votre ordinateur.

Puis, depuis un invite de commande, saisissez la commande suivante à la racine de votre projet

```bash
  $ ionic cordova platform add android # Si vous avez un smartphone Android
  $ ionic cordova platform add ios # Si vous avez un smartphone iOS
```

Éditez le fichier **src/index.html** en ajoutant le fichier cordova.js nécessaire au bon fonctionnement Cordova :
```html
<head>
  <!-- ... Autres tags HTML... -->

  <script src="cordova.js"></script>
</head>
```

Retournez dans votre invite de commandes et redémarrez votre application Ionic en saisissant cette fois la commande suivante :

```bash
  $ ionic serve --devapp
```
Vérifier que l'application Ducknote s'affiche bien dans Ionic DevApp.

Si besoin, saisissez manuellement l'adresse ip **192.168.1.53** et le port **8100**

| Niveau 1 | Niveau 2 |
| :--- | :--- |
| ![](/assets/ducknote_devapp1.png) | ![](/assets/ducknote_devapp2.png) |

Faites des modifications dans votre application, et vérifiez qu'elles apparaissent automatiquement dans Ionic DevApp.
