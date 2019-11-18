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
    </ion-row>
    <ion-row>
      <ion-col>
        Charles E.
      </ion-col>
      <ion-col>
        Développeur Web et Mobile
      </ion-col>
    </ion-row>
    <ion-row>
      <ion-col>
        Intérêt pour la finance, la blockchain, les technologies mobiles et le O'tacos
      </ion-col>
    </ion-row>
  </ion-grid>
</ion-content>

```

![](/assets/ionic_demo_grid_1.png)

Pour plus de détails, merci de consulter la documentation correspondante : [https://ionicframework.com/docs/theming/responsive-grid/](https://ionicframework.com/docs/theming/responsive-grid/)

### Utilisation de SASS

Ionic est construit sur Sass \(Syntactically Awesome Stylesheets\), un langage de génération de feuilles de style, robuste et facile à prendre en main. En fait si vous savez déjà définir une feuille de style, ce langage ne vous choquera pas trop. Grâce à cette technologie embarquée dans Ionic, nous allons non seulement pouvoir définir des styles génériques pour notre application, qui pourront être utilisé à plusieurs endroits différents, mais nous pourrons également changer les styles par défaut des attributs et composants Ionic.

La définition ou la redéfinition de style css dynamique se fait depuis le fichier **src/theme/variables.scss** :

```html
// Named Color Variables
// --------------------------------------------------
// Named colors makes it easy to reuse colors on various components.
// It's highly recommended to change the default colors
// to match your app's branding. Ionic uses a Sass map of
// colors so you can add, rename and remove colors as needed.
// The "primary" color is the only required color in the map.

$colors: (
  primary:    #488aff,
  secondary:  #32db64,
  danger:     #f53d3d,
  light:      #f4f4f4,
  dark:       #222,
  duckcoin:   #df4932 // Notre première valeur SASS
);
```

Vous pouvez ici effectuer des changements sur les valeurs par défaut des thèmes primaire, secondaire, ...Et ils s'appliqueront automatiquement à l'ensemble de vos composants.

```html
<ion-header>
  <ion-navbar color="duckcoin">
    <ion-title>Duckcoin</ion-title>
  </ion-navbar>
</ion-header>
```

Ici la barre de navigation aura comme couleur de fond \(background\) celle définie dans le fichier de variables scss et comme couleur de texte du blanc. Si vous voulez autre chose que du blanc, disons du jaune, vous devriez modifier votre style comme ceci :

**src/theme/variables.scss**

```html
$colors: (
  primary:    #488aff,
  secondary:  #32db64,
  danger:     #f53d3d,
  light:      #f4f4f4,
  dark:       #222,
  duckcoin: (
    base: #df4932,
    contrast: yellow
  )
);
```

![](/assets/screen_home_4.png)

Il est également possible d'appeler des variables définis dans ce fichier **src/theme/variables.scss** directement dans nos fichiers scss. Changeons par exemple la couleur du bouton présent dans l'onglet Profil :

**src/app/profile/profile.scss**

```html
page-profile {
  [ion-button] {
    background: color($colors, duckcoin, base);
  }
}
```

qui est l'équivalent css de :

```js
page-profile {
  [ion-button] {
    background: #df4932;
  }
}
```

![](/assets/screenprofile_1.png)

De manière générale, les Variables Sass vous permettent de définir une valeur une fois, puis de l'utiliser à plusieurs endroits différents. Une variable commence toujours par un signe dollar \($\) et est initialisé comme une propriété CSS classique.

Supposons par exemple que l'on souhaite imposer une largeur maximale sur un certain nombre de composants de notre application \(des images, boutons,...\). On pourrait par exemple faire ceci dans le fichier variables.css :

**src/theme/variables.scss**

```html
$max-width: 400px;
```

Puis dans une ou plusieurs feuilles de style scss invoquer notre variable :

```html
div {
    width:$max-width;
}
```

On pourrait même faire des calculs sur la variable  :

```html
img {
    width : $max-width/10;
}
```



