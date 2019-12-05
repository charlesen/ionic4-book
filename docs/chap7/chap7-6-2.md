## Deuxième Application : DuckTweet

Nous allons créer une application qui sera une version simplifiée de Tweeter.

Cela va nous aider à mettre en application tout ce que nous avons appris jusqu'à présent.

![](/assets/ducktweet_maquette.jpg)

La couleur bleue utilisée par Twitter correspond au code hexadécimal **#1da1f2**.

### Création de l'application

Nous allons utiliser le template _tabs_ pour créer une application comportant des onglets.Nous choisirons Angular comme Framework à utiliser.

```bash
$ ionic start ducktweet tabs --type=angular
✔ Preparing directory ./ducktweet - done!
✔ Downloading and extracting tabs starter - done!

Installing dependencies may take several minutes.


$ cd ducktweet # On accède au dossier créé
$ ls -al # on y retrouve tous les fichiers propres à un projet Ionic Angular

total 520
drwxr-xr-x   6 charles charles   4096 déc.   5 12:04 .
drwxrwxr-x   6 charles charles   4096 déc.   5 12:03 ..
-rw-r--r--   1 charles charles   5260 déc.   4 00:13 angular.json
-rw-r--r--   1 charles charles    430 déc.   4 00:13 browserslist
drwxr-xr-x   3 charles charles   4096 déc.   5 12:03 e2e
drwxr-xr-x   8 charles charles   4096 déc.   5 12:04 .git
-rw-r--r--   1 charles charles    389 déc.   4 00:13 .gitignore
-rw-r--r--   1 charles charles     69 déc.   5 12:03 ionic.config.json
-rw-r--r--   1 charles charles    981 déc.   4 00:13 karma.conf.js
drwxr-xr-x 780 charles charles  28672 déc.   5 12:04 node_modules
-rw-r--r--   1 charles charles   1705 déc.   5 12:03 package.json
-rw-r--r--   1 charles charles 433827 déc.   5 12:04 package-lock.json
drwxr-xr-x   6 charles charles   4096 déc.   5 12:03 src
-rw-r--r--   1 charles charles    210 déc.   4 00:13 tsconfig.app.json
-rw-r--r--   1 charles charles    546 déc.   4 00:13 tsconfig.json
-rw-r--r--   1 charles charles    295 déc.   4 00:13 tsconfig.spec.json
-rw-r--r--   1 charles charles   1847 déc.   4 00:13 tslint.json
```

Il ne vous reste plus qu'à lancer votre application avec **ionic lab** ou **ionic serve**.

```bash
$ ionic lab

Install @ionic/lab? (Y/n) # on saisit "Y" pour installer Ionic Lab.
```

![](/assets/ducktweet_1.png)

\### Mise en page et style CSS

Nous allons à présent adapter notre application pour qu'il colle au style de notre maquette.

Créons une nouvelle couleur, comme nous l'avons avec Ducknote.

Pour cela nous avons le choix entre éditez directement le fichier **variables.scss** ou alors utiliser le générateur de couleur proposé par Ionic. Nous allons opter pour la deuxième option.

Depuis l'adresse <https://ionicframework.com/docs/theming/color-generator>, éditons n'importe quelle couleur.

Choisissons la couleur **primary** par exemple et remplaçons simplement **#3880ff** par **#1da1f2**.

![](/assets/ducktweet_2.png)

Il vous suffit ensuite de copier le code généré, l'ajouter au fichier variables.scss et remplacer toutes les occurrences de **primary** par le nom de votre couleur.

![](/assets/ducktweet_3.png)

**src/theme/variables.scss**

```css
--ion-color-ducktweet: #1da1f2;
--ion-color-ducktweet-rgb: 29,161,242;
// Modification de cette valeur pour avoir #ffffff au lieu #000000
--ion-color-ducktweet-contrast: #ffffff;
--ion-color-ducktweet-contrast-rgb: 0,0,0;
--ion-color-ducktweet-shade: #1a8ed5;
--ion-color-ducktweet-tint: #34aaf3;


/* Autres couleurs ... */
```

Vous êtes bien sûr libre d'adapter ce code couleur à vos envie.
Par exemple, nous avons modifier la troisième ligne pour avoir **#ffffff** au lieu **#000000**

Nous allons ensuite ajouter cette couleur dans le style global de l'application :

**src/global.css**

```css
// On applique le style à toutes les pages
.ion-color-ducktweet {
  --ion-color-base: var(--ion-color-ducktweet);
  --ion-color-base-rgb: var(--ion-color-ducktweet-rgb);
  --ion-color-contrast: var(--ion-color-ducktweet-contrast);
  --ion-color-contrast-rgb: var(--ion-color-ducktweet-contrast-rgb);
  --ion-color-shade: var(--ion-color-ducktweet-shade);
  --ion-color-tint: var(--ion-color-ducktweet-tint);
}
```

Modifions à présent la page d'accueil pour que la couleur de la barre de navigation corresponde à celle que nous venons de créer

**src/app/tab1/tab1.page.html**

```html
<ion-header>
  <!-- On ajoute la nouvelle couleur ici -->
  <ion-toolbar color="ducktweet">
    <ion-title>
      <!-- On modifie aussi le titre de la page-->
      DuckTweet
    </ion-title>
  </ion-toolbar>
</ion-header>

<!-- Autres éléments de la page -->
```

**src/app/tabs/tabs.page.html**

```html
<ion-tabs>

  <ion-tab-bar slot="bottom">
    <ion-tab-button tab="tab1">
      <ion-icon name="home"></ion-icon>
      <ion-label>Accueil</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="tab2">
      <ion-icon name="search"></ion-icon>
      <ion-label>Rechercher</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="tab3">
      <ion-icon name="flash"></ion-icon>
      <ion-label>Explorer</ion-label>
    </ion-tab-button>
  </ion-tab-bar>

</ion-tabs>
```

On obtient le résultat suivant

| AVANT                        |             APRES            |
| ---------------------------- | :--------------------------: |
| ![](/assets/ducktweet_1.png) | ![](/assets/ducktweet_4.png) |

### Mise en place du service Tweet

Nous allons à présent mettre un service qui va se charger de gérer tout l'aspect métier de notre application.
N'hésitez pas à revenir sur ce [qui a été fait pour l'application DuckNote.](https://ionic.mobiletuto.com/v4/chap6/chap6-2.html).

Nous aurons besoin des méthodes suivantes :

-   **createTweet** : permettant la création d'un tweet
-   **deleteTweet** : pour la suppression d'un tweet
-   **getTweet** : qui renverra une note en fonction de son identifiant unique
-   **save** : qui permet la sauvegarde de tous les tweets
-   **load** : permet le chargement des tweets depuis Ionic storage

La création du service se fait en saisissant la commande :

```bash
$ ionic g service services/Tweets

> ng generate service services/Tweets
CREATE src/app/services/tweets.service.spec.ts (333 bytes)
CREATE src/app/services/tweets.service.ts (135 bytes)
[OK] Generated service!
```

#### Création d'un Tweet

Dans le service fraîchement créé, définissons tout d'abord une interface pour caractériser notre tweet

**src/app/services/tweets.service.ts**

```javascript
import { Injectable } from '@angular/core';

// On importe le plugin storage pour pouvoir sauvegarder nos tweets
import { Storage } from '@ionic/storage';

// Cette interface permet de caractériser un objet tweet
interface Tweet {
  id: string; // chaînes de caractères
  content: string; // chaînes de caractères
  photos: Array<string>; // Tableau de chaînes de caractères
}

// ...autres éléments de code
```

Un tweet sera donc constitué :

-   D'un identifiant unique **(id)**
-   D'un contenu **(string)**
-   De zéro ou plusieurs images **(photos)**

 Ajoutons présent les méthodes **createTweet** et **save**, permettant dans l'ordre :

-   De créer un tweet
-   D'ajouter le tweet créé à la liste de tous les tweets, avant sauvegarde de l'ensemble en base de données:

    ```javascript
    import { Injectable } from '@angular/core';

    // On importe le plugin storage pour pouvoir sauvegarder nos tweets
    import { Storage } from '@ionic/storage';

    // Cette interface permet de caractériser un objet tweet
    interface Tweet {
      id: string; // chaînes de caractères
      content: string; // chaînes de caractères
      photos: Array<string>; // Tableau de chaînes de caractères
    }

    @Injectable({
      providedIn: 'root'
    })
    export class TweetsService {

      public tweets: Tweet[] = [];
      public loaded: boolean = false;
      constructor(private storage: Storage) { }

      createTweet(content, photos = []): void {
        // Le champs content est obligatoire, mais pas celui stockant les photos ([])

        // Création d'un identifiant unique pour la note
        let id = Math.max(...this.tweets.map(note => parseInt(note.id)), 0) + 1;

        this.tweets.push({
          id: id.toString(),
          content: content,
          photos: photos
        });

        this.save();

      }

      /**
      ** Sauvegarde de tous les tweets en Base de données
      **/
      save(): void {
        this.storage.set('tweets', this.tweets);
      }

    }
    ```


```

```
