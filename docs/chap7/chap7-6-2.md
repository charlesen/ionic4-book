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
-   **save** : qui permet la sauvegarde de tous les tweets
-   **getTweet** : qui renverra un tweet en fonction de son identifiant unique
-   **load** : permet le chargement des tweets depuis Ionic storage
-   **deleteTweet** : pour la suppression d'un tweet

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

    // Création d'un identifiant unique pour le tweet
    let id = Math.max(...this.tweets.map(tweet => parseInt(tweet.id)), 0) + 1;

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

#### Chargement des tweets

Pour afficher la liste de tous les tweets, on un tweet en particulier, nous allons utiliser les méthodes :

-   **load** : chargement de tous les tweets
-   **getTweet** : renvoie d'un tweet en fonction de son identifiant

```javascript
/**
** Chargement des tweets
**/
load(): Promise<boolean> {

  // Création d'une nouvelle promesse pour nous permettre de décider
  // si l'opération est OK ou NON.
  return new Promise((resolve) => {

    // Récupère les tweets stockées en Base de données
    this.storage.get('tweets').then((tweets) => {

      // On ajoute les valeurs à la liste uniquement si des données existent en BDD
      if (tweets != null) {
        this.tweets = tweets;
      }

      // État de chargement des données
      this.loaded = true;

      // L'opération est OK
      resolve(true);

    });

  });

}

/**
** Renvoie le tweet correspondant à l'identifiant id
** @param id
**/
getTweet(id): Tweet {
  return this.tweets.find(tweet => tweet.id === id);
}
```

#### Suppression d'un tweet

Nous allons simplement créer une méthode deleteTweet qui va retirer le tweet de la liste des éléments, avant de sauvegarder cette dernière.

```javascript
/**
** Suppression d'un tweet en fonction de son ID
** @param tweet
**/
deleteTweet(tweet): void {

 // Récupération de l'index du tweet dans la liste des tweets
 let index = this.tweets.indexOf(tweet);

 // Puis suppression de l'élément et Sauvegarde de la nouvelle liste
 if (index > -1) {
   this.tweets.splice(index, 1);
   this.save();
 }

}
```

Voilà ! À présent que notre service est en place, on va pouvoir l'appeler dans notre page d'accueil.

#### Affichage des tweets

 Appelons le service Tweet dans la page d'accueil

 **src/app/tab1/tab1.page.ts**

```javascript
import { Component } from '@angular/core';
import { TweetsService, Tweet } from '../services/tweets.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public tweets: Tweet[] = [];
  constructor() {}

}
```

Modifions le html pour afficher la liste des tweets et permettre l'ajout de nouveaux éléments via un bouton situé en entête.

 **src/app/tab1/tab1.page.html**

```html
<ion-header>
  <!-- On ajoute la nouvelle couleur ici -->
  <ion-toolbar color="ducktweet">
    <ion-title>
      <!-- On modifie aussi le titre de la page-->
      DuckTweet
    </ion-title>
    <ion-buttons slot="end">
      <!--  Un bouton d'ajout permettant la création d'une tweet -->
      <ion-button (click)="addTweet()">
        <ion-icon slot="icon-only" name="add"></ion-icon>
      </ion-button>
    </ion-buttons>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-list lines="none">
    <!-- ...On rajoute nos tweets ICI à l'aide d'une boucle for (ngFor, comme aNGular For) -->
    <ion-card *ngFor="let tweet of tweetsService.tweets" [routerLink]="'/tweet/' + tweet.id" routerDirection="forward">
      <ion-card-header>
        <ion-card-title>{{tweet.title}}</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <p>{{tweet.content}}</p>
      </ion-card-content>
    </ion-card>
    <ion-item [hidden]="tweetsService.tweets.length > 0" class="ion-text-center ion-padding-top">
      <ion-label>Aucun tweet. <br /> Soyez le premier à publier.</ion-label>
    </ion-item>
  </ion-list>
</ion-content>

```

Sans Tweet | Après le premier tweet
---      | --- |
![](/assets/ducktweet_5.png) | ![](/assets/ducktweet_6.png) |

Créons à présent une page pour afficher le contenu de notre tweet.
```bash
$ ionic g page Tweet
```

Éditons-la pour qu'elle nous permette d'afficher correctement le contenu du tweet sur lequel on cliquera.

**src/app/tweet/tweet.page.ts**

```javascript

import { Component, OnInit } from '@angular/core';

// Routing
import { ActivatedRoute } from '@angular/router';

// Service
import { TweetsService, Tweet } from '../services/tweets.service';

@Component({
  selector: 'app-tweet',
  templateUrl: './tweet.page.html',
  styleUrls: ['./tweet.page.scss'],
})
export class TweetPage implements OnInit {
  tweet: Tweet;
  constructor(private route: ActivatedRoute,
    public tweetsService: TweetsService) {
    // Initialisation d'un tweet à vide
    this.tweet = {
      id: '',
      content: '',
      create_at: '',
      photos: []
    };
  }

  ngOnInit() {
    // On récupère l'identifiant de la
    let tweetId = this.route.snapshot.paramMap.get('id');
    this.tweet = this.tweetsService.getTweet(tweetId);
  }

}

```

On en fait de même pour la page HTML

**src/app/tweet/tweet.page.ts**

```html
<ion-header>
  <ion-toolbar color="ducktweet">
    <ion-buttons slot="start">
      <ion-back-button defaultHref="home" text="Retour"></ion-back-button>
    </ion-buttons>
    <ion-title>Tweet</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding">
  {{tweet.content}}
</ion-content>

```

Sans Tweet | Après le premier tweet
---      | --- |
![](/assets/ducktweet_6.png) | ![](/assets/ducktweet_7.png) |

Voilà. N'hésitez pas à rajouter tout ce qui vous vient à l'esprit pour vous rapprocher le plus possible de la version originale de Twitter.
