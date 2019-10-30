## Composant Fab \(Floating Action Buttons\)

Ce composant est issu du Material Design, un ensemble de règles de design proposés par Google et présent notamment dès la version 5.0 du système d'exploitation Android. Il s'agit d'un élément en forme de cercle qui permet, au clic, d'afficher d'autres éléments actionnables eux aussi par clic.

```html
<ion-fab vertical="bottom" horizontal="end">
    <ion-fab-button>
      <ion-icon name="arrow-dropleft"></ion-icon>
    </ion-fab-button>
  </ion-fab>
```

On peut choisir de placer notre fab à différents endroit sur l'écran. Affichons-le par exemple en haut à gauche

```html
<ion-fab vertical="top" horizontal="start" slot="fixed">
  <ion-fab-button>
    <ion-icon name="arrow-dropright"></ion-icon>
  </ion-fab-button>
</ion-fab>
```

![](/assets/composant_fab_2.png)

N'hésitez pas au besoin à adapter votre style scss comme ci :

**src/app/mapage/mapage.page.scss**

```html
ion-fab[vertical="top"] {
  top:60px;
}
```


Documentation : [https://ionicframework.com/docs/api/components/fab/FabButton/](https://ionicframework.com/docs/api/components/fab/FabButton/)
