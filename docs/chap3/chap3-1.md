## Customisation

### Attributs de style

Ionic met à disposition un ensemble d'attributs qui peuvent être utilisés sur n'importe quel élément pour modifier du texte, le centrer ou encore gérer les marges. Tout comme des frameworks comme Bootstrap on va pouvoir utiliser des classes css \(ion-text-center, ion-text-start,...\), qui vont nous permet de modifier nos éléments.

```html
<h2 class="ion-text-center">Un texte centré</h2>
```

| Classe css | Style CSS | Description |
| :--- | :--- | :--- |
| ion-text-left | text-align: left | Aligne du texte à gauche |
| ion-text-right | text-align:right | Aligne du texte à droite |
| ion-text-start | text-align:start | Identique à text-left si la direction d'écriture va de gauche vers la droite et text-right si la direction est de droite vers la gauche. |
| ion-text-end | text-align:end | Identique à text-right si la direction d'écriture est de gauche vers la droite et de text-left si la direction est de droite vers la gauche. |
| ion-text-center | text-align:center | Centre le contenu |
| ion-text-justify | text-align:justify | Justifie le contenu |

Une liste beaucoup plus exhaustive se trouve dans la documentation, qui est extrêmement bien faite [https://ionicframework.com/docs/layout/css-utilities/](https://ionicframework.com/docs/layout/css-utilities/)

On va pouvoir utiliser ces attributs directement dans nos pages.

Ajoutons par exemple un peu de texte à notre page d'accueil. Grâce aux classes utilitaires, on va pouvoir centrer notre texte ou encore l'afficher en majuscule

**src/pages/home/home.html**

```html
<ion-header>
  <ion-toolbar color="ducknote">
    <!-- On ajoute la nouvelle couleur -->
    <ion-buttons slot="start">
      <ion-menu-button></ion-menu-button>
    </ion-buttons>
    <ion-title>
      DuckNote
    </ion-title><!-- On change l'intitulé de la page-->
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-card class="welcome-card">
    <!-- <img src="/assets/shapes.svg" alt="" /> -->
    <img src="/assets/ducknote_hero.jpg" alt="" />
    <ion-card-header>
      <ion-card-subtitle>Pour ne rien oublier, où que vous soyez</ion-card-subtitle>
      <ion-card-title>Essayez DuckNote</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <p>Notez tout ce qui vous passe par la tête. Ajoutez des notes, des listes, des photos et des contenus audio.</p>
    </ion-card-content>
  </ion-card>

  <!-- Un Texte centré -->
  <div class="ion-text-center">
    <h3>text-center</h3>
    <p>Je suis un texte centré !</p>
  </div>

  <!-- Un texte en majuscule -->
  <div class="ion-text-uppercase ion-padding">
    <h3>
      text-uppercase
    </h3>
    <p>
      Le contenu de ce texte est en majuscule <strong>(ion-text-uppercase)</strong> <br />
      et possède une marge de 16px <strong>(ion-padding)</strong> de chaque côté.
    </p>
  </div>

</ion-content>
```

| Exemple de Texte centré | Exemple de texte en majuscule |
| :--- | :--- |
| ![](/assets/ionic_text_center.png) | ![](/assets/ionic_text_upper.png) |

### Grille CSS responsive

Ionic propose également un système de grille css pour permettre une meilleur gestion de blocs de contenus. Il est assez similaire dans sa syntaxe à celui que propose Bootstrap.

```html
<ion-header>
  <ion-toolbar color="ducknote">
    <ion-buttons slot="start">
      <ion-back-button defaultHref="home" text="Retour"></ion-back-button>
    </ion-buttons>
    <ion-title>Profil</ion-title>
    <ion-buttons slot="end">
      <ion-button>
        <ion-icon slot="icon-only" name="contact"></ion-icon>
      </ion-button>
      <ion-button>
        <ion-icon slot="icon-only" name="search"></ion-icon>
      </ion-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-grid class="ion-text-center">

    <ion-row>
      <ion-col>
        <img src="assets/author.jpg"/>
      </ion-col>
    </ion-row><!-- Ligne 1-->

    <ion-row>
      <ion-col>
        Charles E.
      </ion-col>
      <ion-col>
        Développeur Web et Mobile
      </ion-col>
    </ion-row><!-- Ligne 2-->

    <ion-row>
      <ion-col>
        Intérêt pour la finance, la blockchain, les technologies mobiles et le O'tacos
      </ion-col>
    </ion-row><!-- Ligne 3-->

  </ion-grid>
</ion-content>
```

![](/assets/ionic_demo_grid_1.png)

Pour plus de détails, vous pouvez consulter la documentation correspondante : [https://ionicframework.com/docs/layout/grid](https://ionicframework.com/docs/layout/grid)

### Utilisation de SASS

Ionic utilise Sass \(Syntactically Awesome Stylesheets\) pour sa gestion de styles CSS. Sass est un langage de génération de feuilles de style, robuste et facile à prendre en main. En fait si vous savez déjà définir une feuille de style, ce langage ne vous choquera pas trop. Grâce à cette technologie embarquée dans Ionic, nous allons non seulement pouvoir définir des styles génériques pour notre application, qui pourront être utilisé à plusieurs endroits différents, mais nous pourrons également changer les styles par défaut des attributs et composants Ionic.

La définition ou la redéfinition de style css dynamique se fait depuis le fichier **src/theme/variables.scss. **

C'est dans ce fichier que l'ont pourra apporter des changements sur les valeurs par défaut des thèmes de couleurs proposés par Ionic. Nos modifications pourront ensuite être appliquées automatiquement à l'ensemble de nos composants.

```css
// Ionic Variables and Theming. For more info, please see:
// http://ionicframework.com/docs/theming/

/** Ionic CSS Variables **/
:root {

  /** primary **/
  --ion-color-primary: #3880ff;
  --ion-color-primary-rgb: 56, 128, 255;
  --ion-color-primary-contrast: #ffffff;
  --ion-color-primary-contrast-rgb: 255, 255, 255;
  --ion-color-primary-shade: #3171e0;
  --ion-color-primary-tint: #4c8dff;

  /** secondary **/
  --ion-color-secondary: #0cd1e8;
  --ion-color-secondary-rgb: 12, 209, 232;
  --ion-color-secondary-contrast: #ffffff;
  --ion-color-secondary-contrast-rgb: 255, 255, 255;
  --ion-color-secondary-shade: #0bb8cc;
  --ion-color-secondary-tint: #24d6ea;

  /** tertiary **/
  --ion-color-tertiary: #7044ff;
  --ion-color-tertiary-rgb: 112, 68, 255;
  --ion-color-tertiary-contrast: #ffffff;
  --ion-color-tertiary-contrast-rgb: 255, 255, 255;
  --ion-color-tertiary-shade: #633ce0;
  --ion-color-tertiary-tint: #7e57ff;

  /** ... **/
```

Il est également possible de créer sa propre couleur. Définissons par exemple une nouvelle couleur que nous appellerons **ducknote**.

**src/theme/variables.scss**

```css
/** Ionic CSS Variables **/
/* root Permet d'appliquer le style à tous les OS */
:root {

  /** ducknote **/
  --ion-color-ducknote: #f1b004;
  --ion-color-ducknote-rgb: 244, 244, 244;
  --ion-color-ducknote-contrast: #000000;
  --ion-color-ducknote-contrast-rgb: 0, 0, 0;
  --ion-color-ducknote-shade: #d7d8da;
  --ion-color-ducknote-tint: #f5f6f9;

  /** .... **/
```

Toutes les définitions de style dans le sélecteur **:root** s'appliqueront à tous les systèmes d'exploitation \(android, ios\). Il est aussi possible de spécifier un style par OS.

```css
/* S'appliquera à tous les OS */
:root {
  /* On applique une couleur d'arrière-plan à l'ensemble de l'application */
  --ion-background-color: #ff3700;

  /* On applique une police de caractère à toute l'application */
  --ion-font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", "Roboto", sans-serif;
}

/* S'appliquera uniquement aux smartphones iOS */
.ios {
  --ion-text-color: #000;
}

/* S'appliquera uniquement aux smartphones Android  */
.md {
  --ion-text-color: #222;
}
```

Une fois votre couleur définie dans le fichier **variables.scss **, vous devez ensuite l'appeler dans le fichier scss de votre page \(**src/app/mapage/home.page.scss**\) ou alors dans le fichier **global.scss** si vous souhaitez utiliser cette couleur n'importe où dans l'application.

**src/app/home/home.page.scss**

```css
// ..

// On applique le style à la page d'accueil uniquement
.ion-color-ducknote {
  --ion-color-base: var(--ion-color-ducknote);
  --ion-color-base-rgb: var(--ion-color-ducknote-rgb);
  --ion-color-contrast: var(--ion-color-ducknote-contrast);
  --ion-color-contrast-rgb: var(--ion-color-ducknote-contrast-rgb);
  --ion-color-shade: var(--ion-color-ducknote-shade);
  --ion-color-tint: var(--ion-color-ducknote-tint);
}
```

**src/global.scss**

```css
// ...

// On applique le style à toutes les pages
.ion-color-ducknote {
  --ion-color-base: var(--ion-color-ducknote);
  --ion-color-base-rgb: var(--ion-color-ducknote-rgb);
  --ion-color-contrast: var(--ion-color-ducknote-contrast);
  --ion-color-contrast-rgb: var(--ion-color-ducknote-contrast-rgb);
  --ion-color-shade: var(--ion-color-ducknote-shade);
  --ion-color-tint: var(--ion-color-ducknote-tint);
}
```

Une fois votre couleur définie dans votre fichier scss, il vous suffira de l'appler dans le composant[^1] de votre choix.

Modifions par exemple la couleur du composant _barre de navigation_ \(**ion-navbar**\) de la page d'accueil:

**src/app/home/home.page.html**

```html
<ion-header>
  <ion-navbar color="ducknote">
    <ion-title>Ducknote</ion-title>
  </ion-navbar>
</ion-header>
```

Ici la barre de navigation aura comme couleur de fond \(background\) du jaune \(**\#f1b004** ou **244, 244, 244 **en RGB\) et comme couleur de texte du noir \(**\#000000** ou **0,0,0** en RGB\).

![](/assets/ducknote_color.png)

Vous êtes tout à fait libre de mettre les codes couleurs de votre choix. Et pour générer de manière plus efficace vos thèmes, vous pouvez utiliser l'outil que propose Ionic sur son site internet : [https://ionicframework.com/docs/theming/colors\#new-color-creator](https://ionicframework.com/docs/theming/colors#new-color-creator) :

![](/assets/ionic_color_generator.png)

Une votre couleur générée, il ne vous suffira plus qu'à la rajouter au fichier variables.scss, ainsi que dans le fichier scss de la page de votre choix.

Il est également possible de définir des variables dans le fichier **src/theme/variables.scss**, puis de l'utiliser dans d'autres fichiers scss. Une variable commence toujours par un signe dollar \($\) et est initialisé comme une propriété CSS classique.

Supposons par exemple que l'on souhaite imposer une largeur maximale à un certain nombre de composants de notre application \(des images, boutons,...\). On pourrait par exemple faire ceci dans le fichier variables.css :

**src/theme/variables.scss**

```css
:root {


  --maxWidth: 800px;
  
  /** ... **/
```

Puis dans une ou plusieurs feuilles de style scss invoquer notre variable :

```css
div {
    width:var(--maxWidth);
}
```

On pourrait même faire des calculs sur la variable  :

```css
img {
    width:var(--maxWidth)/5;
}
```

[^1]: Nous étudierons la notion de composant au chapitre 4.

