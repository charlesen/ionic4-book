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

Créer une nouvelle application que vous nommerez **ducktweet** à partir du template Tabs et basé sur Angular.

```
$ ionic start ducktweet tabs
```

En vous basant sur ce qui a été fait précédemment avec la liste des notes, faites en sorte que l'on puisse visualiser la liste de ces derniers Tweet en Page d'accueil.

2\) Utilisez les composants Ionic pour vous rapprocher le plus possible de l'application officielle Twitter

![](/assets/ducktweet.jpg)

3\) La date de création n'est pas trop jolie pour le moment. Nous allons donc utiliser un Pipe Date pour permettre un affichage beaucoup plus user-friendly.

A partir de la documentation officielle \([https://angular.io/api/common/DatePipe](https://angular.io/api/common/DatePipe)\), faites en sorte que la date s'affiche au format :** jj/mm/aaa. **Si besoin, n'hésitez pas à modifier le format du _**created\_at**_ pour qu'il corresponde au format attendu par le Pipe.

4\) Créez une page de login avec un nom d'utilisateur et un E-mail. Faites en sorte qu'elle soit la page par défaut. Mettez en place le système de Guards présenté au [chapitre 5](/chap5/README.md).

4\) Comme avec les notes, mettez en place un Service pour la gestion des Tweets, qui va donc nous permettre :

* De créer de nouveaux tweets avec du texte et des images. Puis les stocker en base de données
* D'afficher la liste de tous les derniers tweets
* Afficher un tweet particulier
* Supprimer un tweet

5\) Testez votre application sur un device grâce à Ionic Dev App.

