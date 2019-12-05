## Exercez-vous

1\) On aimerait mettre en place notre application DuckTweet comme expliqué au [chapitre précédent](/chap7/chap7-6-2.html)

Créer une nouvelle application que vous nommerez **ducktweet** à partir du template Tabs et basé sur Angular.

```
$ ionic start ducktweet tabs
```

2\) Utilisez les composants Ionic pour vous rapprocher le plus possible de l'application officielle Twitter

![](/assets/ducktweet.jpg)

3\) Comme avec les notes, mettez en place un Service pour la gestion des Tweets, qui va donc nous permettre :

* De créer de nouveaux tweets avec du texte et des images. Puis les stocker en base de données
* D'afficher la liste de tous les derniers tweets
* Afficher un tweet particulier
* Supprimer un tweet

4\) La date de création n'est pas très jolie pour le moment. Nous allons donc utiliser un Pipe Date pour permettre un affichage beaucoup plus user-friendly.

A partir de la documentation officielle \([https://angular.io/api/common/DatePipe](https://angular.io/api/common/DatePipe)\), faites en sorte que la date s'affiche au format :** jj/mm/aaa.
Si besoin, n'hésitez pas à modifier le format du _**created\_at**_ pour qu'il corresponde au format attendu par le Pipe.

5\) Créez une page de login avec un nom d'utilisateur et un E-mail. Faites en sorte qu'elle soit la page par défaut. Mettez en place le système de Guards présenté au [chapitre 5](/chap5/README.md).


6\) Testez votre application avec [Ionic Dev App](https://ionicframework.com/docs/appflow/devapp/).

7\) Ajoutez la possibilité d'inclure des photos dans les Tweets grâce au plugin [Camera](https://ionicframework.com/docs/angular/your-first-app/ios-android-camera).
```
$ npm install @ionic-native/camera
$ ionic cordova plugin add cordova-plugin-camera

```

Testez de nouveau votre application dans [Ionic Dev App](https://ionicframework.com/docs/appflow/devapp/).
