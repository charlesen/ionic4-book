## Composant Cards

Les cartes sont un bon moyen d'afficher des informations importantes à destination des utilisateurs. Ce pattern s'inspire des cartes de visite personnelles ou professionnelles que nous utilisons dans la vie courante.

```html
<ion-header>

  <ion-navbar color="ducknote">
    <ion-title>Ma Page</ion-title>
  </ion-navbar>

</ion-header>


<ion-content>
  <ion-card>

    <ion-card-header>
      Charles EDOU NZE
    </ion-card-header>

    <ion-card-content>
      <p>Profession : Ingénieur informatique</p>
      <p>Localisation : Troyes</p>
      <p>Site internet : https://charlesen.fr</p>
    </ion-card-content>

  </ion-card>
</ion-content>
```

![](/assets/composant_cards_1.png)

Il est également possible de combiner carte et liste d'éléments comme ceci :

```html
<ion-header>
  <ion-navbar color="ducknote">
    <ion-title>Ma Page</ion-title>
  </ion-navbar>
</ion-header>
<ion-content>
  <ion-card>
    <ion-card-header class="ion-text-center">
      Formations en cours
    </ion-card-header>
    <ion-list>
      <ion-button>
         <ion-icon name="logo-android" slot="start"></ion-icon>
         Développer pour Android
      </ion-button>
      <ion-button>
         <ion-icon name="logo-apple" slot="start"></ion-icon>
         Développer pour iOS
      </ion-button>
      <ion-button>
         <ion-icon name="logo-angular" slot="start"></ion-icon>
         Développer avec Angular
      </ion-button>
      <ion-button>
         <ion-icon name="bug" slot="start"></ion-icon>
         Déboggage avancé en JS
      </ion-button>
    </ion-list>
  </ion-card>
</ion-content>
```

![](/assets/composant_cards_2.png)

Ou tout simplement reproduire un design assez proche de réseaux sociaux comme Instagram :

```html
<ion-header>
  <ion-navbar color="duckcoin">
    <ion-title>Ma Page</ion-title>
  </ion-navbar>
</ion-header>
<ion-content>
  <ion-card>
    <img src="assets/imgs/ducknote-mini.png" />
    <ion-card-content>
      <ion-card-title>
        DuckCoin
      </ion-card-title>
      <p>
        C'est la monnaie qui rend aimable, redonne le sourire et change la face du monde. Elle a été faite pour des gens sympas, juste comme toi.
      </p>
    </ion-card-content>
    <ion-row>
      <ion-col>
        <ion-button fill="clear" size="small" color="duckcoin">
          J'aime <ion-icon name="heart" slot="start"></ion-icon>
        </ion-button>
      </ion-col>
      <ion-col text-right>
        <ion-button fill="clear" size="small" color="duckcoin">          
          Partager
          <ion-icon name='share-alt' slot="start"></ion-icon>
        </ion-button>
      </ion-col>
    </ion-row>
  </ion-card>
</ion-content>
```

![](/assets/composant_card.png)

Documentation : [https://ionicframework.com/docs/components/\#cards](https://ionicframework.com/docs/components/#cards)

