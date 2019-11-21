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
* findNote : qui renverra une note en fonction de son identifiant unique
* saveNote : qui permet la sauvegarde de plusieurs notes
* loadNote : permet le chargement des notes depuis Ionic storage

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

d

cd



