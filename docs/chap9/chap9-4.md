## Pipes

On en a déjà un peu parlé dans les chapitres précédents. Les pipes permettent de modifier la forme d'un contenu avant son affichage. Citons quelques pipes intéressant :

* **currency** : permet de rajouter une devise avant la valeur sur laquelle on l'applique
* **date** : formatage de date
* **uppercase** : transforme du texte en majuscule
* **lowercase** : transforme du texte en minuscule
* **json** : affiche le contenu d'un objet ou d'un texte au format JSON
* ...

```javascript
let maVariable = "Hello mmi";
```

Puis côté html, on peut appeler le pipe uppercase:

```html
<!-- ... -->
<span>{{maVariable | uppercase}}</span>
```

Pour créer un nouveau Pipe, il suffit de faire :

```javascript
$ ionic g pipe monPipe

// Création du dossier src/pipes/monpipe
/
// Mise à jour du fichier src/pipes/pipes.module.ts
```

Il vous faut ensuite importer le module Pipes dans le module principal de votre application :

```javascript
...

import {PipesModule} from '../pipes/pipes.module';

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ...
    PipesModule, // On déclare notre module Pipes ici
    ComponentsModule, // On déclare notre module Composant ici
    DirectivesModule, // On déclare notre module Directives ici
  ],
```
