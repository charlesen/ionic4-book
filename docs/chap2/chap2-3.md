## Première application Ionic

### DuckNote : Pour ne plus rien oublier

Dans la suite de notre voyage, nous allons créer une application de prise de notes appelée **_DuckNote_**.
Bien évidemment, toute ressemblance avec Death Note ne serait que pure et fortuite coïncidence.  
Car notre application, loin d'éliminer les personnes autour de nous, va nous à ne plus rien oublier, où que nous soyons.
Vous pourrez noter tout ce qui vous passe par la tête. Vraiment tout !

Grâce à **_DuckNote_**, nous allons pouvoir ajouter :

* des notes simples avec du texte et/ou des images ;
* des listes ;
* et du contenu audio

![](/assets/screen_ducknotes_1.png)

Pour créer votre première application, il vous suffit simplement de saisir **_ionic start ducknote_** depuis votre invite de commandes :

```
$ ionic start ducknote
Pick a framework! 😁

Please select the JavaScript framework to use for your new app. To bypass this prompt next time, supply a value for the
--type option.

? Framework: (Use arrow keys)
❯ Angular | https://angular.io
  React   | https://reactjs.org
```

Pour le choix du Framework, nous allons saisir la touche **entrer** et utiliser Angular. Nous aurons l'occasion de tester React un peu plus tard.

Vous devrez ensuite choisir le template Ionic que vous souhaitez utiliser pour l'application.

```
Let's pick the perfect starter template! 💪

Starter templates are ready-to-go Ionic apps that come packed with everything you need to build your app. To bypass this
prompt next time, supply template, the second argument to ionic start.

? Starter template: (Use arrow keys)
  tabs         | A starting project with a simple tabbed interface
❯ sidemenu     | A starting project with a side menu with navigation in the content area
  blank        | A blank starter project
  my-first-app | An example application that builds a camera with gallery
  conference   | A kitchen-sink application that shows off all Ionic has to offer
```

Nous allons choisir ici le template **_Sidemenu_**', qui va nous créer une application simple avec un menu latéral.

Votre environnement va ensuite s'installer tranquillement au bout de quelques secondes.
```
? Starter template: sidemenu
✔ Preparing directory ./ducknote - done!
(node:18008) ExperimentalWarning: The http2 module is an experimental API.
✔ Downloading and extracting sidemenu starter - done!

Installing dependencies may take several minutes.
```

Il est également possible de créer une application vide (blank), avec des onglets ou autres encore \(voir la commande **ionic start --list** décrite dans la suite\)

La syntaxe générique de création d'une application est la suivante :

```
$ ionic start [<name>] [<template>]
```

| Entrée | Description |
| :--- | :--- |
| name | C'est le nom de votre application au format Camel par ex. Vous pouvez également l'écrire tout en minuscule \(ce que je recommande\) |
| template | C'est le template ionic de votre choix. Pour afficher la liste des templates disponible actuellement, vous pouvez saisir la commande **ionic start --list **\(voir ci-dessous\) |

```bash
$ ionic start --list
Starters for @ionic/angular (--type=angular)

name         | description
--------------------------------------------------------------------------------------
tabs         | A starting project with a simple tabbed interface
sidemenu     | A starting project with a side menu with navigation in the content area
blank        | A blank starter project
my-first-app | An example application that builds a camera with gallery
conference   | A kitchen-sink application that shows off all Ionic has to offer
```

* tabs : permet la création d'une application avec un système d'onglets
* sidemenu : application avec menu latéral
* blank : application avec une simple page d'accueil
* my-first-app : une application de galerie photo embarquant le module camera
* conference : application complexe avec la plupart des composants et bonnes pratiques de Ionic

![](/assets/start-app-template.png)

il est également possible de créer une application à partir d'un dépot git :

```bash
$ ionic start nomdelapplication https://github.com/charlesen/monappli_sur_git
```

Une fois votre application créée, vous pouvez accéder au dossier contenant le projet, puis le démarrer:

```bash
$ cd ducknote
$ ionic lab
```

S'il vous ait demandé d'installer Ionic Lab, choisissez **"Y"**.

Ionic devrait ensuite ouvrir votre application depuis votre navigateur préféré.

![](/assets/ionic4_start_app.png)

L'utilitaire en ligne de commande de Ionic (Ionic CLI) utilise le module **Angular CLI** pour les étapes de compilation. La version minimum de NodeJS supporté par ce module au moment de la rédaction de ce livre est la **10.9**.
Veillez-donc à ce que votre version de Node soit la bonne.

```bash
$ node -v
v10.16.3
```

À défaut de cela, vous aurez une erreur du type **_[ng] You are running version v9.7.1 of Node.js, which is not supported by Angular CLI 8.0+._**:

```bash
[ng] You are running version v9.7.1 of Node.js, which is not supported by Angular CLI 8.0+.
[ng] The official Node.js version that is supported is 10.9 or greater.
[ng] Please visit https://nodejs.org/en/ to find instructions on how to update Node.js.
[ERROR] ng has unexpectedly closed (exit code 3).
```

À l'aide de votre éditeur de code préféré, éditez le fichier **src/app/home/home.page.html** et remplacez **"Home"** par **"DuckNote"**.
```html
<ion-header>
  <ion-toolbar>
    <ion-buttons slot="start">
      <ion-menu-button></ion-menu-button>
    </ion-buttons>
    <ion-title>
      <!-- AVANT -->
      <!-- Home -->

      <!-- APRÈS -->
      DuckNote
    </ion-title>
  </ion-toolbar>
</ion-header>
```

Vous pouvez bien évidemment utiliser l'éditeur de votre choix, mais s'il vous vient l'envie de tester autre chose, je vous propose ici deux éditeurs de code intéressants pour développer avec Ionic.

#### Visual Studio Code

![](/assets/vs_code.png)

Éditeur de code extensible développé par Microsoft pour Windows, Linux et OS X. C'est l'éditeur que je recommande le mieux, car il vous facilitera énormément la vie, grâce notamment à des composants proposés par la communauté des développeurs Ionic à installer directement dans l'éditeur.

**Télécharger :** [https://code.visualstudio.com/](https://code.visualstudio.com/)

#### Atom

![](/assets/atom-logo.png)

Éditeur de texte libre pour OS X, GNU/Linux et Windows développé par GitHub.

**Télécharger :** [https://atom.io/](https://atom.io/)


Éditez ensuite le fichier **src/theme/variables.scss** comme ceci :
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

Puis le fichier **src/app/home/home.page.scss** :

```css

  .welcome-card img {
    max-height: 35vh;
    overflow: hidden;
  }

  // Les modifications commencent ici : On applique le style à la page Home ici
  .ion-color-ducknote {
    --ion-color-base: var(--ion-color-ducknote);
    --ion-color-base-rgb: var(--ion-color-ducknote-rgb);
    --ion-color-contrast: var(--ion-color-ducknote-contrast);
    --ion-color-contrast-rgb: var(--ion-color-ducknote-contrast-rgb);
    --ion-color-shade: var(--ion-color-ducknote-shade);
    --ion-color-tint: var(--ion-color-ducknote-tint);
  }

```

Retourner vers votre navigateur pour admirer l'étendue de votre génie :

| AVANT | APRÈS |
| :--- | :--- |
| ![](/assets/ionic4_start_app.png) | ![](/assets/ionic4_start_app2.png) |


Félicitations, vous venez de créer votre première application mobile ! Facile n'est pas ?!

Vous l'avez peut être remarqué, mais **DuckNote** est en réalité une réplique de l'application **Google Keep** que vous pouvez télécharger sur le Google Play Store ou l'Apple Store.

![](/assets/google_keep_screen.png)

Dans la suite du livre nous allons progressivement aborder des notions plus complexes du Framework en rendant, au passage, notre application **DuckNote** beaucoup plus élégante et utile.
