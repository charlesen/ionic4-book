## Exercez-vous

1\) Revenons à notre application Ducktweet. Créez un nouveau composant nommé "feed" qui affichera la liste des derniers tweets créés.

2\) Appelez ce nouveau composant dans l'onglet **Explorer** de l'application DuckTweet

![](/assets/ducktweet_6.png)

3\) Créez une directive que vous nommerez **"bigger"**. Celle-ci permettra d'augmenter la taille \(font-size\) de l’élément qui l'invoquerait. N'importe lequel.
Créez autant de directive que nécessaire pour facilement customiser votre application.

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

4\) Nous avons introduit les composants natifs proposés par Ionic [https://ionicframework.com/docs/native/](https://ionicframework.com/docs/native/). Utilisez un maximum d'entre eux et ajoutez-les à votre projet.


### Exercice avec 2 Points BONUS : DuckMemory

Dans cet exercice, nous souhaitons réaliser un jeu de memory comme celui-ci : http://memory.charlesen.fr

![](/assets/duckmemory.png)

Le principe du jeu est relativement simple : **Cliquer sur une carte et trouver son double.**

Si une paire est trouvée, c'est validé. Sinon, vous n'avez plus qu'à recommencer.
Si vous réussissez à valider toutes les paires dans le temps imparti, vous avez remporté la partie.
