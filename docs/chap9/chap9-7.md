## Exercez-vous

1\) Revenons à notre application Ducktweet. Créez un nouveau composant **Feed** qui affichera la liste des derniers tweets créés.

On va le faire en deux étapes :
- Création d'un module **components** qui stockera notre composant et tous ceux que l'on voudra créés à l'avenir
- Création du composant

```bash
$ ionic g module components
$ ionic g component components/Feed

> ng generate component components/Feed
CREATE src/app/components/feed/feed.component.scss (0 bytes)
CREATE src/app/components/feed/feed.component.html (23 bytes)
CREATE src/app/components/feed/feed.component.spec.ts (668 bytes)
CREATE src/app/components/feed/feed.component.ts (260 bytes)
[OK] Generated component!
```

Modifions le ComponentsModule :

```javascript
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

// On importe le composant
import { FeedComponent } from './feed/feed.component';

@NgModule({
  declarations: [FeedComponent],
  exports: [FeedComponent],
  imports: [
    IonicModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }

```


Éditons le composant pour qu'il appelle le service Tweet que nous avons créé.

**src/app/components/feed/feed.component.ts**
```javascript

import { Component, OnInit } from '@angular/core';

// Import du composant Alert
import { AlertController } from '@ionic/angular';

// Import du service Tweet
import { TweetsService } from './../../services/tweets.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
})
export class FeedComponent implements OnInit {

  constructor(
    public tweetsService: TweetsService,
    private alertCtrl: AlertController) { }

  ngOnInit() {
    this.tweetsService.load();
  }

  /**
  ** Méthode pour ajouter un Tweet
  **/
  async addTweet() {
    this.alertCtrl.create({
      header: 'Nouveau tweet',
      inputs: [
        {
          type: 'text',
          name: 'content',
          id: 'post-content',
          placeholder: 'Saisissez votre texte ici...'
        }
      ],
      buttons: [
        {
          text: 'Annuler'
        },
        {
          text: 'Ajouter',
          handler: (data) => {
            this.tweetsService.createTweet(data.content);
          }
        }
      ]
    }).then((alert) => {
      alert.present();
    });
  }

}


```

**src/app/components/feed/feed.component.html**
```html

<ion-list lines="none">
  <!-- ...On rajoute nos tweets ICI à l'aide d'une boucle for (ngFor, comme aNGular For) -->
  <ion-card *ngFor="let tweet of tweetsService?.tweets" [routerLink]="'/tweet/' + tweet.id" routerDirection="forward">
    <ion-item>
      <ion-label>@charles
        <small>{{tweet.create_at | date:'d/M/yy'}}</small>
      </ion-label>
      <ion-note slot="end">
        <ion-icon name="heart-empty" size="large"></ion-icon>
      </ion-note>
    </ion-item>
    <ion-card-content>
      <p appDuckborder>{{tweet.content}}</p>
    </ion-card-content>
  </ion-card>
  <ion-item [hidden]="tweetsService?.tweets.length > 0" class="ion-text-center ion-padding-top">
    <ion-label>Aucun tweet. <br /> Soyez le premier à publier.</ion-label>
  </ion-item>
</ion-list>

<ion-fab vertical="bottom" horizontal="end" class="ion-padding">
  <ion-fab-button (click)="addTweet()">
    <ion-icon name="add"></ion-icon>
  </ion-fab-button>
</ion-fab>


```

Pour afficher notre composant dans une page, il vous faudra déclarer le module ComponentsModule créé précédemment dans le module de la page concernée. Dans les versions précédente d'Ionic (Angular), il est possible de déclarer simplement ce module ComponentsModule dans le module principal (app.module.ts).

Mais afin de respecter le lazy loading (chargement de code uniquement si nécessaire), il est nécessaire désormais de déclarer nos composants de cette manière. Un peu laborieux, mais cela permet d'avoir de meilleurs performances sur mobile.

Pour donc afficher le composant Feed en Page d'accueil , il faut effectuer les ajustements suivants dans la balise **ion-content** :

**src/app/tab1/tab1.page.html**
```html
<!-- ... -->

<ion-content>
  <app-feed></app-feed>
</ion-content>

```

**src/app/tab1/tab1.module.ts**
```javascript
// Import du module
import { ComponentsModule } from './../components/components.module';

//... Autres lignes de code

imports: [
  // ... Autres éléments
  ComponentsModule,
  // ...
]
```

![](/assets/ducktweet_6.png)

2\) Comme avec la page d'accueil, appelez ce nouveau composant dans l'onglet **Explorer**.

![](/assets/ducktweet_8.png)

3\) Créez une directive que vous nommerez **"bigger"**. Celle-ci permettra d'augmenter la taille \(font-size\) de l’élément qui l'invoquerait. N'importe lequel.
Créez autant de directives que nécessaire pour facilement customiser votre application.

**Corrigez les bugs éventuels :-).**

4\) Créez un Pipe que vous nommerez _**moment**_ . Vous l'utiliserez dans votre liste de feeds pour afficher la date de création d'un tweet de la même façon que le plugin Javascript **Moment** (https://momentjs.com/).


```js
{{feed.create_at | moment}} // Renvoie "il y a quelques secondes"
```

```
Exemples d'utilisation de la librairie MomentJS

moment("20111031", "YYYYMMDD").fromNow(); // il y a 8 ans
moment("20120620", "YYYYMMDD").fromNow(); // il y a 7 ans
moment().startOf('day').fromNow();        // il y a une heure
moment().endOf('day').fromNow();          // dans un jour
moment().startOf('hour').fromNow();       // il y a 19 minutes


```

![](/assets/ducktweet_maquette.png)

**Corrigez les bugs éventuels :-).**

4\) Nous avons introduit les composants natifs proposés par Ionic [https://ionicframework.com/docs/native/](https://ionicframework.com/docs/native/). Utilisez un maximum d'entre eux et ajoutez-les à votre projet.


### Exercice avec 2 Points BONUS : DuckMemory

Dans cet exercice, nous souhaitons réaliser un jeu de memory comme celui-ci : http://memory.charlesen.fr

![](/assets/duckmemory.png)

Le principe du jeu est relativement simple : **Cliquer sur une carte et trouver son double.**

Si une paire est trouvée, c'est validé. Sinon, vous n'avez plus qu'à recommencer.
Si vous réussissez à valider toutes les paires dans le temps imparti, vous avez remporté la partie.

Pour les images de ce memory, vous utiliser des images personnelles, ou celles du jeu disponible à l'adresse (18 en tout) :
- Image 1 : https://memory.charlesen.fr/static/img/card1.jpg
- Image 2 : https://memory.charlesen.fr/static/img/card2.jpg
- Image 3 : https://memory.charlesen.fr/static/img/card3.jpg
- ...
- Image 18 : https://memory.charlesen.fr/static/img/card18.jpg


Pour réaliser des paires d'images, vous pouvez utiliser une méthode de type shuffle, qui va mélanger vos cartes de manières aléatoires et créer des doubles pour chaque carte.


```javascript
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // On boucle sur le tableau...
  while (0 !== currentIndex) {

    // Index de carte aléatoire...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // que l'on échange avec une autre carte...etc
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// On appelle un tableau
var cardArray = ['card1.jpg', 'card2.jpg', 'card3.jpg', 'card4.jpg'];


var card1 = shuffle(cardArray);
var card2 = shuffle(cardArray);
var cardPlateau = card1.concat(card2);

// Affiche les cartes + leur doublons de manière aléatoire
console.log(cardPlateau);

```

Il n y a pas de recommandation particulière pour la création de ce jeu, mais l'utilisation d'un composant est vivement recommandée :-).

Vous aurez également besoin des [grids Ionic](https://ionicframework.com/docs/api/grid) :
- Grid : https://ionicframework.com/docs/api/grid

Que la force soit avec vous !
