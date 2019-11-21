## Composant Bouton

Pour ajouter un composant de type bouton à votre application mobile, il suffit simplement de faire...attention, très grand moment ... :

```html
<ion-button>Mon bouton</ion-button>
```

Voilà. C'est tout.

Il est possible de customiser un bouton grâce à de nombreuses [directives, concept abordé au chapitre 8](/chap8).  :

```html
<!-- Composant Bouton -->

<h2 class="ion-text-center">Composant Bouton</h2>
<ion-button>Mon bouton</ion-button>

<!-- Un bouton avec un lien -->
<ion-button href="/monlien">Un Lien fort</ion-button>

<!-- Un bouton avec la couleur primary -->
<ion-button color="primary">Couleur primary</ion-button>

<!-- Un bouton qui occupe toute la largeur -->
<ion-button expand="full">Bouton sur toute la largeur</ion-button>

<!-- Un bouton arrondi -->
<ion-button shape="round">Bouton rond</ion-button>

<!-- Un bouton avec une icône à gauche -->
<ion-button>
  <ion-icon slot="start" name="star"></ion-icon>
  Une icone de gauche
</ion-button>

<!-- Un bouton avec une icône à droite -->
<ion-button>
  Une icone de droite
  <ion-icon slot="end" name="star"></ion-icon>
</ion-button>

<!-- Un bouton avec une icône uniquement -->
<ion-button>
  <ion-icon slot="icon-only" name="star"></ion-icon>
</ion-button>

<!-- Fill -->
<ion-button expand="full" fill="outline">Sans couleur de fond + Sur toute la largeur</ion-button>
<ion-button expand="block" fill="outline">Sans couleur de fond + Bloc en Pleine largeur</ion-button>
<ion-button shape="round" fill="outline">Sans couleur de fond + Rond</ion-button>

<!-- différentes tailles de boutons -->
<ion-button size="large">Taille large</ion-button>
<ion-button>Taille par défaut</ion-button>
<ion-button size="small">Petite taille</ion-button>
```

![](/assets/ionic_composant_bouton.png)

on peut ainsi retirer le background pour n'afficher que la bordure dans la couleur définie grâce à la directive **fill="outline"** :

```html
<ion-header>

  <ion-navbar color="duckcoin">
    <ion-title>Ma Page</ion-title>
  </ion-navbar>

</ion-header>


<ion-content padding>
  <ion-button fill="outline">Mon bouton par défaut (primary)</ion-button>
  <ion-button color="secondary" fill="outline">Mon bouton avec couleur secondaire</ion-button>
  <ion-button color="danger" fill="outline">Mon bouton rouge</ion-button>
  <ion-button color="dark" fill="outline">Mon bouton noir</ion-button>
</ion-content>
```

![](/assets/composant_boutons_3.png)

Ou encore retirer les bordures du boutons avec la directive **clear** :

```html
<ion-header>

  <ion-navbar color="ducknote">
    <ion-title>Ma Page</ion-title>
  </ion-navbar>

</ion-header>


<ion-content padding>
  <ion-button clear>Mon bouton par défaut (primary)</ion-button>
  <ion-button color="secondary" clear>Mon bouton avec couleur secondaire</ion-button>
  <ion-button color="danger" clear>Mon bouton rouge</ion-button>
  <ion-button color="dark" clear>Mon bouton noir</ion-button>
</ion-content>
```

![](/assets/composant_boutons_2.png)

Pour plus d'information, vous pouvez consulter la documentation Ionic à l'adresse : [https://ionicframework.com/docs/api/button](https://ionicframework.com/docs/api/button)

