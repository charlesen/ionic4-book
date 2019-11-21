## Exercez-vous

Notre application commence à prendre forme. N'hésitez pas à revenir sur les notions étudiées aux chapitres 3 et 4.

1\) Créez la page de Login comme décrite dans ce chapitre 5 : _**Navigation entre les pages &gt; Ajout de nouvelles pages et navigation entre elles**_

```
$ ionic g page login
```

Ajustez votre code de façon à obtenir le résultat suivant : 

![](/assets/ducknote_login_1.png)

2\) Faites en sorte qu'au clic sur le bouton "Se connecter" on puisse accéder à la page d'accueil.



3\) Modifier la page de routage pour faire de la page de Login la page par défaut

4\) Mettez en place le système de gards présenté dans ce chapitre. 

```
$ ionic g guard guards/auth
```

Faites en sorte qu'on ne puisse afficher la page d'accueil qu'à la seule condition d'être «connecté»

