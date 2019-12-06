## Exercez-vous

1\) Revenons à notre application Ducktweet. Créez un nouveau composant nommé "feed" qui affichera la liste des derniers tweets créés.

Inspirez-vous de ce qui a été fait au [Chapitre 8 - Installation d'Angular CLI et Création d'un nouveau projet](chap8/chap8-1.html).

2\) Appelez ce nouveau composant dans l'onglet **Explorer** de l'application DuckTweet

![](/assets/ducktweet_6.png)

3\) Créez une directive que vous nommerez **"bigger"**. Celle-ci permettra d'augmenter la taille \(font-size\) de l’élément qui l'invoquerait. N'importe lequel.
Créez autant de directive que nécessaire pour facilement customiser votre application.

**Corrigez les bugs éventuels :-).**

4\) Créez un Pipe que vous nommerez _**moment**_ que vous utiliserez dans votre liste de feeds pour afficher la date de création d'un tweet de la même façon que le plugin Javascript **Moment** (https://momentjs.com/).


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

// Affiche les cartes de manière aléatoire
console.log(shuffle(cardArray));

```

Vous aurez également besoin des [grids Ionic](https://ionicframework.com/docs/api/grid) :
- Grid : https://ionicframework.com/docs/api/grid

Que la force soit avec vous !
