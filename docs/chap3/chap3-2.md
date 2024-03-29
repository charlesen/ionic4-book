## Templates et création de nouvelles pages

### Racine de toutes les pages

Nous allons nous intéresser un peu au fichier **src/app/app.component.html**. C'est en effet à partir de lui que seront **"générées"** toutes les autres pages.

```html
<!--  Autres éléments html ...-->
<ion-router-outlet main></ion-router-outlet>
<!-- ... -->
```

On y trouve le tag **ion-router-outlet** qui composant de routage. C'est dans cet élément que seront encapsuler les composants de l'application en fonction de l'url. Toute la logique de routage \(notion que l'on abordera plus tard\) est gérée dans le fichier **src/app/app-routing.module.ts**.

```javascript
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```

Ainsi, d'après ce fichier de routage, si vous saisissez l'url [http://localhost:8100/home](http://localhost:8100/home), vous devriez afficher la page d'accueil \(module Home\), et [http://localhost:8100/list](http://localhost:8100/list), une autre page avec une liste d'éléments \(module List\).

### Création d'une nouvelle page

Pour créer une nouvelle page, il vous suffit de saisir la commande **ionic g page LeNomDeLaPage**  :

```
$ ionic g page Profile

> ng generate page Profile
CREATE src/app/profile/profile.module.ts (548 bytes)
CREATE src/app/profile/profile.page.scss (0 bytes)
CREATE src/app/profile/profile.page.html (126 bytes)
CREATE src/app/profile/profile.page.spec.ts (698 bytes)
CREATE src/app/profile/profile.page.ts (260 bytes)
UPDATE src/app/app-routing.module.ts (682 bytes)
[OK] Generated page!
```

_**"g"**_ pour _**"generate"**_.

Dans cet exemple, j'ai créé une nouvelle page qui va nous permettre d'afficher un profil utilisateur. Cette commande m'a automatiquement générer un certain nombre de fichiers dont le triplet : **fichier .ts + fichier .html + fichier .scss**.

```bash
$ ls -al src/app/profile/
total 24
drwxrwxr-x 2 charles charles 4096 nov.  18 17:00 .
drwxrwxr-x 5 charles charles 4096 nov.  18 17:00 ..
-rw-rw-r-- 1 charles charles  548 nov.  18 17:00 profile.module.ts
-rw-rw-r-- 1 charles charles 1020 nov.  18 17:36 profile.page.html
-rw-rw-r-- 1 charles charles    0 nov.  18 17:00 profile.page.scss
-rw-rw-r-- 1 charles charles  698 nov.  18 17:00 profile.page.spec.ts
-rw-rw-r-- 1 charles charles  260 nov.  18 17:00 profile.page.ts
```

**src/app/profile/profile.page.ts**

```js
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
```

**src/app/profile/profile.page.html**

```html
<ion-header>
  <ion-toolbar>
    <ion-title>Profile</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>

</ion-content>
```

De plus, le module de routage a été automatiquement mis à jour pour nous.

```javascript
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },

  // Une nouvelle entrée pour le profil
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' }
];
```

Allez à l'adresse : [http://localhost:8100/profile](http://localhost:8100/profile) pour afficher votre page de profil.

### Création d'une page de consultation des notes

Modifions un peu notre page d'accueil pour qu'elle affiche un ensemble de notes statiques et non persistantes pour le moment \(nous verrons plus tard comment créer des notes, les sauvegarder ou les supprimer\).

**src/app/home/home.page.ts**

```js
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  notes: { id: number, title: string, content: string }[] = [
    { "id": 1, "title": "Faire les courses", "content": "Acheter de quoi faire une bonne raclette. Diversifier les types de fromages." },
    { "id": 2, "title": "Faire du sport", "content": "Pensez à bien m'étirer avant de commencer, pour éviter toute courbature ou fracture." },
    { "id": 3, "title": "IUT", "content": "Préparer la soutenance de stage et contacter mon tuteur." }
  ];
  constructor() { }

  getNoteById(id) {
    return this.notes.filter(note => note.id = id);
  }

}
```

Nous avons simplement défini une variable nommée _**notes**_, de type tableau et contenant, comme vous vous en doutez, des notes.

Puis dans le fichier html, apportons les modifications suivantes dans le composant ion-content:

**src/app/home/home.page.html**

```html
<!-- ...Le header ne change pas -->

<!-- ...Modification du contenu de la page -->

<ion-content>
  <ion-card class="welcome-card">
    <img src="/assets/ducknote_hero.jpg" alt="" />
    <ion-card-header>
      <ion-card-subtitle>Pour ne rien oublier, où que vous soyez</ion-card-subtitle>
      <ion-card-title>Essayez DuckNote</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <p>Notez tout ce qui vous passe par la tête. Ajoutez des notes, des listes, des photos et des contenus audio.</p>
    </ion-card-content>
  </ion-card>

<!-- ...On rajoute nos notes ICI à l'aide d'une boucle for (ngFor, comme aNGular For) -->

  <ion-card *ngFor="let note of notes">
    <ion-card-header>
      <ion-card-title>{{note.title}}</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <p>{{note.content}}</p>
    </ion-card-content>
  </ion-card>

  <!-- ...le reste de la page -->

</ion-content>
```

Ce qui donne le résultat suivant :

![](/assets/ducknote_list.png)

Pour l'instant on affiche simplement dans la _vue html_ \(_**src/app/home/home.page.html**_\), les notes que nous avons définie dans le _controleur_ de la page \(_**src/app/home/home.page.ts**_\).

Mais nous souhaitons aussi pouvoir cliquer sur une note pour en afficher les détails. Pour cela, nous allons créer une nouvelle page que nous nommerons simplement **Note**, qui permettra d'effectuer ces actions.

Depuis votre invite de commandes, faites ceci :

```bash
$ ionic g page Note

CREATE src/app/note/note.module.ts (533 bytes)
CREATE src/app/note/note.page.scss (0 bytes)
CREATE src/app/note/note.page.html (123 bytes)
CREATE src/app/note/note.page.spec.ts (677 bytes)
CREATE src/app/note/note.page.ts (248 bytes)
UPDATE src/app/app-routing.module.ts (753 bytes)
[OK] Generated page!
```

Notre page a correctement été créé, et la page de routage a automatiquement été mise à jour. Modifier le fichier de routage comme ceci :

**src/app/app-routing.module.ts**

```js
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //... le reste du routage reste inchangé

  //... On configure la Page Note
  // locahost/note redirigera vers la page d'accueil
  { path: 'note', redirectTo: 'home', pathMatch: 'full' },

  // locahost/note:id affichera le détail de la note
  { path: 'note/:id', loadChildren: './note/note.module#NotePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

Dans cette nouvelle configuration, on dit simplement que :

* L'url [**http://localhost:8100/note**](http://localhost:8100/note) nous redirigera vers la page d'accueil
* L'url [**http://localhost:8100/note/UnID**](http://localhost:8100/note/1) renverra vers la note dont l'identifiant est **UnID**.

Maintenant que nous avons créé notre page Note, nous allons pouvoir faire en sorte qu'un clic sur une note en page d'accueil nous renvoie vers le détail de celle-ci.

Pour cela, modifions à nouveau le fichier **src/app/home/home.page.html** en ajoutant les directives \[routerLink\] et routerDirection comme ceci :

**src/app/home/home.page.html**

```html
<!-- ...Le reste de la page reste inchangé ... --> 

<!-- ...On rajoute nos notes ICI à l'aide d'une boucle for (ngFor, comme aNGular For) -->
<!-- Petite nouveauté : la présence de [routerLink] et routerDirection -->
  <ion-card *ngFor="let note of notes" [routerLink]="'/note/' + note.id" routerDirection="forward">
    <ion-card-header>
      <ion-card-title>{{note.title}}</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <p>{{note.content}}</p>
    </ion-card-content>
  </ion-card>
```

Nous avons donc ajouter un lien de routage grâce à la directive **routerLink** avec la valeur **/note/ID**. Voyez cela comme l'équivalent d'un href. La directive **routerDirection **permet de jouer sur l'animation du changement de page.

Editons ensuite notre page Note, pour afficher les détails en fonction d'un identifiant :

**src/app/note/note.page.ts**

```js
import { Component, OnInit } from '@angular/core';

// On importe cette classe
import { ActivatedRoute } from '@angular/router';


// Cette interface permet de caractériser un objet note
interface Note {
  id: number;
  title: string;
  content: string;
}

@Component({
  selector: 'app-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss'],
})
export class NotePage implements OnInit {
  // Cette déclaration ne sera plus nécessaire lorsque l'on utilisera les services et la persistance des données
  notes: { id: number, title: string, content: string }[] = [
    { "id": 1, "title": "Faire les courses", "content": "Acheter de quoi faire une bonne raclette. Diversifier les types de fromages." },
    { "id": 2, "title": "Faire du sport", "content": "Pensez à bien m'étirer avant de commencer, pour éviter toute courbature ou fracture." },
    { "id": 3, "title": "IUT", "content": "Préparer la soutenance de stage et contacter mon tuteur." }
  ];
  note: Note;
  constructor(private route: ActivatedRoute) {
    // Initialisation d'une note à vide
    this.note = {
      id: '',
      title: '',
      content: ''
    };
  }

  ngOnInit() {
    // On récupère l'identifiant de la
    let noteId = this.route.snapshot.paramMap.get('id');
    this.note = this.getNoteById(noteId);
  }

  /**
  ** Renvoie une note en fonction de son identifiant
  ** @param id : identifiant de la note
  **/
  getNoteById(id) {
    // La méthode find va rerchercher la première note dont l'identifiant est égal à id
    return this.notes.find(function(note) {
      return note.id == parseInt(id);
    });
  }

}
```

On importe tout d'abord la class ActivatedRoute, qui va nous permettre de récupérer l'Identifiant de la note à partir de l'url.

```js
// On importe cette classe
import { ActivatedRoute } from '@angular/router';
```

On déclare ensuite d'abord une interface qui va nous permettre de caractériser notre note : un objet possédant un identifiant \(id\) un titre \(title\) et du contenu \(content\).

```js
// Cette interface permet de caractériser un objet note
interface Note {
  id: number;
  title: string;
  content: string;
}
```

Dans la classe NotePage, on redéclare à nouveau la variables notes contenant un tableau de notes \(le même que celui en page d'accueil\). Plus tard, lorsque nous aborderons les notions de services et de persistance de données, nous n'aurons plus besoin doublonner cette variable.

On déclare également un objet note du type de l'interface Note.

```js
// Cette déclaration ne sera plus nécessaire lorsque l'on utilisera les services et la persistance des données
  notes: { id: number, title: string, content: string }[] = [
    { "id": 1, "title": "Faire les courses", "content": "Acheter de quoi faire une bonne raclette. Diversifier les types de fromages." },
    { "id": 2, "title": "Faire du sport", "content": "Pensez à bien m'étirer avant de commencer, pour éviter toute courbature ou fracture." },
    { "id": 3, "title": "IUT", "content": "Préparer la soutenance de stage et contacter mon tuteur." }
  ];
  note: Note;
```

Dans le construteur de la classe, on initialise la note à vide. Cette déclaration aura surtout du sens lorsque l'on ira chercher des données de manière asynchrone \(via un API ou depuis la base de données du téléphone\).

```js
constructor(private route: ActivatedRoute) {
    // Initialisation d'une note à vide
    this.note = {
      id: '',
      title: '',
      content: ''
    };
}
```

La méthode ngOnInit est appelé après l'initialisation de la page. C'est donc dans cette méthode là que l'on récupera l'identifiant de la note, avant de récupérer tous les détails de la note grâce la méthode getNoteById.

```js
ngOnInit() {
    // On récupère l'identifiant de la
    let noteId = this.route.snapshot.paramMap.get('id');
    this.note = this.getNoteById(noteId);
  }

  /**
  ** Renvoie une note en fonction de son identifiant
  ** @param id : identifiant de la note
  **/
  getNoteById(id) {
    // La méthode find va rerchercher la première note dont l'identifiant est égal à id
    return this.notes.find(function(note) {
      return note.id == parseInt(id);
    });
  }
```

Il ne reste plus qu'à modifier le fichier html, pour afficher les données de la note :

**src/app/note/note.page.html**

```html
<ion-header>
  <ion-toolbar color="ducknote">
    <ion-buttons slot="start">
      <ion-back-button defaultHref="home" text="Retour"></ion-back-button>
    </ion-buttons>
    <ion-title>{{note.title}}</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding">
  {{note.content}}
</ion-content>
```

On obtient le résulat suivant :

![](/assets/ducknote_note_details.png)

Bravo ! Vous pouvez à présent afficher une liste d'éléments et les affichers de manière détaillée.

Dans la suite nous verrons comment habiller un peu plus notre application grâce aux nombreux composants que proposent Ionic, mais aussi créer, modifier ou supprimer nos notes grâce aux Services et à Ionic Storage.

