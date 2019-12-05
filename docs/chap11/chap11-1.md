## Ionic Appflow

Nous avons déjà parlé et avons même créé un compte au [chapitre 3](/chap3).

Ionic Appflow va vous permette (dans sa version payante) de compiler votre projet sans devoir vous inquiéter de l'installation des packages nécessaires pour chaque plateforme cible \(Android, iOS\).

Pour pusher votre application sur le cloud, il vous suffira de faire :

```bash
$ git add .
$ git commit -m "Mon Application V 0.0.1"
$ git push ionic master
```

Il vous sera peut être demandé de vous authentifier si ce n'est déjà fait.

Vous pouvez bien sûr héberger votre projet mobile sur n'importe qu'elle serveur supportant Git. Personnellement j'utilise Github, qui propose même d'héberger des projets "privés". Bon, n'y mettez quand même pas toute votre vie.

```bash
$ git add .
$ git commit -m "Mon Application V 0.0.1 en direction de github"
$ git push origin master
```

Si jamais vous souhaitez ne plus héberger votre application sur Github et tout rapatrier sur Ionic Appflow, il vous suffit de faire :

```bash
$ ionic link

? What would you like to do?
  Link an existing app on Ionic Appflow
❯ Create a new app on Ionic Appflow

```

Vous aurez le choix entre associer votre application avec un déjà existante sur Ionic Appflow, soit en créer une nouvelle.

Url : [https://dashboard.ionicframework.com](https://dashboard.ionicframework.com)
