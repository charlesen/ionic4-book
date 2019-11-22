## Création, édition et suppression de données

Revenons à notre application Ducknote.

Grâce à Ionic Storage, nous allons pouvoir créer de nouveaux éléments, les éditer ou même les supprimer.

![](/assets/ducknote_list.png)

### Création du Service Notes

Pour éviter de faire du copier-coller de code partout dans l'application, nous allons utiliser la notion de Services ou Providers. Nous en parlerons plus en détails dans des chapitres ultérieurs.

Un service est un «helper», une classe qui permet d'offrir une ou plusieurs fonctionnalités précises à une Page ou à un à composant.

Les pages d'une application sont responsables de présenter à l'utilisateurs des données visuelles. Bien qu'ils soient tout à fait possible de mettre en œuvre au sein d'une page une logique métier dans les fichiers \* .page.ts, il est préférable de faire usage des services pour gérer cette partie là.

Un service n'affiche donc rien à l'utilisateur. Il s'agit simplement d'un "assistant" utilisé par les composants ou les pages de notre application pour effectuer des opérations particulières. Nos pages pourront appeler les méthodes d'un service pour le faire fonctionner.

De cette façon, nous pouvons garder le code de nos pages léger et pouvons également partager les données et les méthodes disponibles via des services avec plusieurs pages de notre application \(alors que, si nous définissons des méthodes dans nos pages, elles ne sont accessibles que par cette page\).

Les services sont ainsi le principal moyen de partager des données entre différentes pages ou composants.

Notre service Note implémentera différentes méthodes, à savoir :

* createNote : permettant la création d'un note
* deleteNote : pour la suppression d'un note
* getNote : qui renverra une note en fonction de son identifiant unique
* save : qui permet la sauvegarde de toutes les notes
* load : permet le chargement des notes depuis Ionic storage

Créons à présent notre service en saisissant la commande :

```bash
$ ionic g service services/Notes
```

**src/app/services/notes.service.ts**

```js
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor() { }
}
```

Modifions ce fichier pour ajouter les méthodes décrites précédemment :

```js
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

// Cette interface permet de caractériser un objet note
interface Note {
  id: string;
  title: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  public notes: Note[] = [];
  public loaded: boolean = false;
  constructor(private storage: Storage) { }

  /**
  ** Chargement des notes
  **/
  load(): Promise<boolean> {

    // Renvoie une promise pour nous permettre de savoir quand l'opération est OK
    return new Promise((resolve) => {

      // Récupère les notes stockées en Base de données
      this.storage.get('notes').then((notes) => {

        // On ajoute les valeurs à la liste uniquement si des données existent en BDD
        if (notes != null) {
          this.notes = notes;
        }

        // Etat de chargement des données
        this.loaded = true;
        resolve(true);

      });

    });

  }

  /**
  ** Sauvegarde de la liste de toutes les notes en Base de données
  **/
  save(): void {
    this.storage.set('notes', this.notes);
  }

  /**
  ** Renvoie la note correspondante à l'identifiant id
  ** @param id
  **/
  getNote(id): Note {
    return this.notes.find(note => note.id === id);
  }

  createNote(title, content): void {

    // Création d'un identifiant unique pour la note
    let id = Math.max(...this.notes.map(note => parseInt(note.id)), 0) + 1;

    this.notes.push({
      id: id.toString(),
      title: title,
      content: content
    });

    this.save();

  }

  /**
  ** Suppression d'une note en fonction de son ID
  ** @param note
  **/
  deleteNote(note): void {

    // Récupération de l'index de la note dans la liste des notes
    let index = this.notes.indexOf(note);

    // Puis suppression de l'élément et Sauvegarde de la nouvelle liste
    if (index > -1) {
      this.notes.splice(index, 1);
      this.save();
    }

  }

}

```

Nous pouvons à présent appeler ce service dans n'importe qu'elle page, dont la page d'accueil.

```js
import { Component } from '@angular/core';

import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  notes: { id: string, title: string, content: string }[] = [];
  constructor(public notesService: NotesService) { }

  ngOnInit() {
    this.notesService.load();
  }

}

```

Ajoutons à présent un bouton d'ajout dans la barre de navigation de la page d'accueil, qui ouvrira une boite de dialogue de création.

```html
<ion-header>
  <ion-toolbar color="ducknote"> <!-- On ajoute la nouvelle couleur ICI -->
    <ion-buttons slot="start">
      <ion-menu-button></ion-menu-button>
    </ion-buttons>
    <ion-title>
      DuckNote
    </ion-title><!-- On change l'intitulé de la page-->
    <ion-buttons slot="end">

      <ion-button [routerLink]="['/profile']">
        <ion-icon slot="icon-only" name="contact"></ion-icon>
      </ion-button>
      
      <!--  Un bouton d'ajout permettant la création d'une note -->
      <ion-button (click)="addNote()">
        <ion-icon slot="icon-only" name="add"></ion-icon>
      </ion-button>

    </ion-buttons>
  </ion-toolbar>
</ion-header>

<!-- ... -->
```

cd



