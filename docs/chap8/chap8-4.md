## Exercez-vous

1) Créez un nouveau projet comme expliqué au [Chapitre 8 - Installation d'Angular CLI et Création d'un nouveau projet](chap8/chap8-1.html).

2) Que pouvez-vous remarquer dans l'arborescence de ce projet Angular...vis-à-vis de Ionic ?

3) A l'aide de la commande suivante, générez un nouveau Composant nommé  **"feed"**, qui va nous permettre d'afficher un fil d'actualités (tweets, notifications,...) :

```bash
$ ng g c feed


CREATE src/app/feed/feed.component.scss (0 bytes)
CREATE src/app/feed/feed.component.html (23 bytes)
CREATE src/app/feed/feed.component.spec.ts (614 bytes)
CREATE src/app/feed/feed.component.ts (262 bytes)
UPDATE src/app/app.module.ts (467 bytes)
```

Vérifiez que le module général (app.module.ts) a bien été mis à jour. Sinon modifiez-le comme ceci :

**src/app/app.module.ts**
```javascript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component'; // <--- On importe notre composant ici

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FeedComponent // <--- On déclare notre composant ici. Ainsi il sera disponible partout dans l'application
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Que s'est-il passé ? Ouvrez le fichier **src/app/feed/feed.component.ts** et examinez-le.

4) Ouvrez le fichier **src/app/app.component.html**, et remplacez le contenu ci-dessous (on ne gardera que le logo d'Angular)

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

-   **DuckWeb**
    -   **Feed**

5) Remplacez le contenu du fichier **src/app/feed/feed.component.html**. Quel changement dans votre navigateur ?

6) Ouvrez le fichier **src/app/feed/feed.component.ts** , puis dans le constructeur, définissez  une liste de tweets dans une variable nommée feeds (on aurait pu l'appeler autrement).

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

7) Dans le fichier **src/app/feed/feed.component.ts**, ajoutez les lignes suivantes dans la partie dédiée aux imports :

```javascript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
```

Puis modifiez le fichier comme ceci :

```javascript
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiUrl = 'https://randomuser.me/api/';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {

  feeds: any = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    // On récupère du contenu via une requête Http Get (10 items)
    this.http
      .get(`${apiUrl}`,
        {
          params: {
            results: '10'
          },
          observe: 'response'
        })
      .subscribe(data => {
        console.log(data)
        this.feeds = data['body']['results'];
      }, (error) => {
        console.log(error);
      });
  }

}

```

Puis le fichier html
```html
<div class="container">
  <h3 class="text-center">Fil d'actualité</h3>
  <div class="text-center text-feed" *ngFor="let feed of feeds">
    <p>{{feed?.name?.title}} {{feed?.name?.first}} {{feed?.name?.last}}</p>
    <p>({{feed?.location.country}})</p>
    <img src="{{feed?.picture?.thumbnail}}" alt="Photo de {{feed?.name?.first}}" />
    <p>Tel : {{feed?.cell}}</p>
  </div>
</div>

```

Un peu de CSS et le tour est joué

```css
.container {
  width: 80%;
  max-width: 400px;
  margin: 0 auto;
}
.text-center {
  text-align: center;
}

.text-feed {
  border : 1px solid #cecece;
  padding: 4px;
  margin: 10px;
}
```


Une petite minute...Vous devriez avoir planté normalement. Savez-vous pourquoi ?

    No provider for HttpClient!

Dans le fichier **src/app/app.module.ts** ajoutez les lignes suivantes :

```javascript
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
// ...
```

Une fois le bug corrigé, vous devriez obtenir un résultat proche de celui-ci :

![](/assets/duckweb_3.png)

Grâce à l'utilisation du module http, vous pourrez facilement récupérer des données issues de sites ou applications distantes.


### Pour aller plus loin

-   _Build Your First Angular App_, de Dan Wahlin, Développeur Google
    -   <https://scrimba.com/p/pQxesM/ce4baHb>
-   Angular Tutorial :
    -   <https://www.tutorialspoint.com/angular4/index.htm>
    -   <https://angular-2-training-book.rangle.io/>
-   Documentation officielle :
    -   <https://angular.io/docs>
    -   <https://cli.angular.io/>
