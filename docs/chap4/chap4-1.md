## Composant Bouton

Pour ajouter un composant de type bouton à votre application mobile, il suffit simplement de faire...attention, très grand moment ... :

```html
<ion-button>Mon bouton</ion-button>
```

Tada ! Ce n'est pas plus compliqué que ça. Il s'agit en fait d'un élément html button avec un attribut ionic **ion-button **qui permettent simple de rajouter du style css.

On peut aussi customiser un peu ce bouton grâce à des [directives, concept abordé au chapitre 8](/chap8). Ajustons par exemple la couleur des différents boutons grâce à la directive **"color"**:

```html
<ion-button color="light">Mon bouton clair</ion-button>
<ion-button>Mon bouton par défaut (primary)</ion-button>
<ion-button color="secondary">Mon bouton avec couleur secondaire</ion-button>
<ion-button color="danger">Mon bouton rouge</ion-button>
<ion-button color="dark">Mon bouton noir</ion-button>
```

![](/assets/composant_boutons_1.png)

on peut également retirer le background pour n'afficher que la bordure dans la couleur définie grâce à la directive **fill="outline"** :

```html
<ion-header>

  <ion-navbar color="ducknote">
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

Documentation : [https://ionicframework.com/docs/api/button](https://ionicframework.com/docs/api/button)
