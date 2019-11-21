# Chap 5 - Système de routage d'Angular

![](/assets/angular-routing-tutorial.png)

La version 4 de Ionic a vu l'arrivée d'un tout nouveau système de routage inspirée d'Angular. Désormais chaque url est associée à une page de l'application, tout comme tout url dans un navigateur est associé à une page web.

Ce modèle est beaucoup plus intuitif que le précédent : en effet c'est le principe de fonctionnement d'un navigateur web classique. Et vous vous en souvenez surement, mais une application hybride est un simple navigateur en mode plein écran.

On va donc pouvoir avec le routage Ionic :

* Saisir une URL dans la barre d'adresse et être redirigé vers la page correspondante.
* Cliquer sur les liens d'une page et naviguer vers une nouvelle page.
* Cliquer sur les boutons Précédent / Suivant de notre application et en conservant l'historique des pages consultées.

C'est ainsi que fonctionne le routeur Angular. Il peut interpréter une URL comme étant une instruction permettant d'accéder à une ressource de l'application. Il peut transmettre des paramètres facultatifs au composant de la vue prise correspondante à l'url, ce qui l'aide à choisir le contenu spécifique à présenter.

