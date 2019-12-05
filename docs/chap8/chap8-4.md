## Exercez-vous

1\) Créez un nouveau projet comme expliqué précédemment

2\) Que pouvez-vous remarquer dans l'arborescence de fichiers d'Angular...vis-à-vis de Ionic ?

3\) A l'aide de la commande suivante, générez un nouveau Composant nommé  **"feed"**, qui nous permettre d'afficher un fil d'actualités (tweets, notifications,...) :

```bash
$ ng g c feed


CREATE src/app/feed/feed.component.scss (0 bytes)
CREATE src/app/feed/feed.component.html (23 bytes)
CREATE src/app/feed/feed.component.spec.ts (614 bytes)
CREATE src/app/feed/feed.component.ts (262 bytes)
UPDATE src/app/app.module.ts (467 bytes)

```

Que s'est-il passé ? Ouvrez le fichier **src/app/feed/feed.component.ts** et examinez-le.

4\) Ouvrez le fichier **src/app/app.component.html**, et remplacez le contenu ci-dessous \(on ne gardera que le logo d'Angular\)

```html
<h2>Here are some links to help you start: </h2>
<ul>
  <li>
    <h2><a target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of Heroes</a></h2>
  </li>
  <li>
    <h2><a target="_blank" rel="noopener" href="https://github.com/angular/angular-cli/wiki">CLI Documentation</a></h2>
  </li>
  <li>
    <h2><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h2>
  </li>
</ul>
```

Par le code suivant :

```html
<app-feed></app-feed>
```

Vous devriez avoir ceci au final :

**src/app/app.component.html**

```html
<!--The content below is only a placeholder and can be replaced.-->
<div style="text-align:center">
  <h1>
    Welcome to {{ title }}!
  </h1>
  <img width="300" alt="Angular Logo" src="..."> <!--- Vous pouvez Garder le base64 de l'image -->
</div>


<!--- Ajout du composant feed -->
<app-feed></app-feed>

<router-outlet></router-outlet>

```

Retournez dans votre navigateur. Que s'est-il passé d'après vous ?

**P.S :** notre application possède désormais l'arborescence suivante :

* **DuckWeb**
  * **Feed**

5\) Remplacez le contenu du fichier **src/app/feed/feed.component.html**. Quel changement dans votre navigateur ?

6\) Ouvrez le fichier **src/app/feed/feed.component.ts** , puis dans le constructeur, définissez  une liste de tweets dans une variable nommée feeds (on aurait pu l'appeler autrement).

Une liste statique comme celle ci-dessous devrait suffire pour l'instant :

```javascript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  feeds: any = [
    { 'id': '1', 'content': 'Un tweet 1' },
    { 'id': '2', 'content': 'Un tweet 2' },
    { 'id': '3', 'content': 'Un tweet 3' },
    { 'id': '4', 'content': 'Un tweet 4' },
    { 'id': '5', 'content': 'Un tweet 5' },
    { 'id': '6', 'content': 'Un tweet 6' },
    { 'id': '7', 'content': 'Un tweet 7' }
  ];
  constructor() { }

  ngOnInit() {
  }

}

```

Modifiez le fichier **src/app/feed/feed.component.html**, de manière à avoir le résultat suivant :


![](/assets/duckweb_2.png)

Que pouvez-vous conclure sur le rôle d'un composant ? Comprenez-vous mieux comment fonctionne les composants Ionic ?

7\) Dans le fichier **src/app/feed/feed.component.ts**, ajoutez les lignes suivantes dans la partie dédiée aux imports :

```js
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
```

Puis modifiez le fichier comme ceci :

```js
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiUrl='https://duckcoin.charlesen.fr';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  feeds: any = [];
  constructor(private http: HttpClient) {
    // On récupère du contenu via une requete Http Get
    this.http.get(`${apiUrl}/feeds`).subscribe(
      data => {
      this.feeds = data['feeds'];
    }, err => {
        console.log("Une erreur s'est produite.")
    });
    //...
  }

  ngOnInit() {
  }

}
```

Vous avez planté normalement. Savez-vous pourquoi ?

```
No provider for HttpClient!
```

Dans le fichier **src/app/app.module.ts** ajoutez les lignes suivantes :

```js
import { HttpClientModule } from '@angular/common/http';
// ...
imports: [
    BrowserModule,
    HttpClientModule,
    // ...
    IonicModule.forRoot(MyApp, {
      // tabsPlacement: 'top',
      backButtonText: 'Retour'
    })
  ],
...
```

Grâce à l'utilisation du module http, vous pouvez facilement récupérer des données directement depuis le site hébergeant la blockchain.

Vous retrouverez les sources, ainsi que les corrections des exercices de ce TP à l'adresse:

[https://github.com/charlesen/ionic-book/tree/master/examples/duckweb](https://github.com/charlesen/ionic-book/tree/master/examples/duckweb)

## Annexes

* _Build Your First Angular App_, de Dan Wahlin, Développeur Google
  * [https://scrimba.com/p/pQxesM/ce4baHb](https://scrimba.com/p/pQxesM/ce4baHb)
* Angular Tutorial :
  * [https://www.tutorialspoint.com/angular4/index.htm](https://www.tutorialspoint.com/angular4/index.htm)
  * [https://angular-2-training-book.rangle.io/](https://angular-2-training-book.rangle.io/)
* Documentation officielle :
  * [https://angular.io/docs](https://angular.io/docs)
  * [https://cli.angular.io/](https://cli.angular.io/)
