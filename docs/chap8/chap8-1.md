## Installation d'Angular CLI et Création d'un nouveau projet

```bash
$ npm install -g @angular/cli # Rajouter "sudo" si nécessaire
```

On va se mettre en dehors de notre projet DuckCoin, pour éviter de le polluer. Dans un dossier autre que celui de Duckcoin, saisir la commande suivante :

```bash
$ ng new duckweb # Cette commande va créer un nouveau dossier duckweb.
```

A la question *Would you like to add Angular routing?*, répondez **y**, puis choisissez le préprocesseur *SCSS*.

Ça va mettre un peu de temps à se créer, mais pas de panique vous êtes sur la bonne voie ;-\).

![](/assets/angular_create_screen1.png)

Si vous rencontrez une exception à la création du projet \(sous Windows notamment\), n'hésitez pas à supprimer le cache npm et recréer votre projet :

```bash
$ rm -rf duckweb # Suppresion du dossier, uniquement si ça bug.
$ npm cache clean --force
$ ng new duckweb
```

Une fois la création terminée, on va pouvoir lancer notre projet :

```bash
$ cd duckweb
$ ng serve --open
```

Si vous rencontrez une autre exception, comme par exemple :
```
Schema validation failed with the following errors:
Data path ".builders['app-shell']" should have required property 'class'.
```

Dans n'hésitez pas à modifier un peu la version du kit de développement Angular dans le fichier *package.json* : **"^0.8XY.Z"** vers **"^0.12.4"**

**package.json**

```json
"@angular-devkit/build-angular": "^0.12.4",
```

Puis recompilez vos packages npm :
```bash
$ npm install
```

Vous n'avez plus qu'à visualiser votre application depuis votre navigateur.

![](/assets/angular_launch.png)

Avant d'aller plus loin, découvrons un peu la structure, puis l'architecture d'un projet Angular.
