## Exercez-vous

1\) On aimerait afficher la liste des derniers tweets d'un utilisateur. Considérons la liste simplifiée suivante :

```js
    this.tweets = [
      {
        'username': 'charles',
        'content': 'Un tweet très édifiant',
         "created_at": "Fri Nov 22 2019 10:24:44",
      },
      {
        'username': 'jeremie',
        'content': 'Quelle belle journée !',
         "created_at": "Fri Nov 22 2019 11:24:44",
      },
      {
        'username': 'raphael',
        'content': 'Un tweet très édifiant',
         "created_at": "Fri Nov 22 2019 10:24:44",
      },
      {
        'username': 'cavani',
        'content': "Encore un but de raté !",
         "created_at": "Fri Nov 23 2019 11:00:12",
      },
      {
        'username': 'neymar',
        'content': "Je crois que je ne vais pas pouvoir venir à l'entrainement ce soir !",
         "created_at": "Fri Nov 23 2019 15:22:24",
      },
      // ...
    ];
```

Créer une nouvelle application que vous nommerez DuckTweet à partir du template Tabs.

En vous basant sur ce qui a été fait précédemment avec la liste des notes, faites en sorte que l'on puisse visualiser la liste des dernièrs Tweet en Page d'accueil.



2\) Le signe dollar \($\) de la liste est ajouté automatiquement grâce à un pipe Angular \(concept abordé au [chapitre 7](/chap7)\). Comment d'après la documentation suivante, est-il possible de remplacer le $ en € ? Puis € en DCK ? [https://angular.io/api/common/CurrencyPipe](https://angular.io/api/common/CurrencyPipe).

![](/assets/transact_2.png)

3\) Faites qu'en cliquant sur une ligne de la transaction, on affiche une fenêtre modale, avec le résumé de la transaction :

[https://ionicframework.com/docs/components/\#modals](https://ionicframework.com/docs/components/#modals)

**P.S :** il est possible de passer des paramètres à une fenêtre modale, puis de les récupérer dans la fenêtre concernée :

Ouverture de la fenêtre avec passage de paramètres :

```js
import { ModalController } from 'ionic-angular';
import { MaPageModal } from './modal/modal'; // la page modale est dans le même dossier que la principale

export class MaPage {
  constructor(public modalCtrl: ModalController) {
  }

  presentModal() {
    let modal = this.modalCtrl.create(ModalPage, {'monParam':'Ceci est un paramètre'});
    modal.present();
  }
}
```

Récupération des données dans la classe de la fenêtre :

```js
export class MaPageModal {
  unParamVenuDeLoin : any;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
    this.unParamVenuDeLoin = this.params.get('monParam')
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
```

## Annexes

* Documentation sur les méthodes Map, filter et Reduce :
  * [https://code.tutsplus.com/tutorials/how-to-use-map-filter-reduce-in-javascript--cms-2620](https://code.tutsplus.com/tutorials/how-to-use-map-filter-reduce-in-javascript--cms-26209)
  * [https://scotch.io/tutorials/list-processing-with-map-filter-and-reduce](#)
