## Pipes

On en a déjà un peu parlé dans les chapitres précédents. Les pipes permettent de modifier la forme d'un contenu avant son affichage. Ils sont utilisés uniquement côté html (**ex :** src/mapage/mapage.page.html)
Citons quelques pipes intéressant :

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
$ ionic g module pipes // si le module Pipe n'existe pas déjà !
$ ionic g pipe pipes/monPipe

> ng generate pipe pipes/monPipe
CREATE src/app/pipes/mon-pipe.pipe.spec.ts (192 bytes)
CREATE src/app/pipes/mon-pipe.pipe.ts (207 bytes)
UPDATE src/app/pipes/pipes.module.ts (249 bytes)
[OK] Generated pipe!

```

**src/app/pipes/pipes.module.ts**

Ajustons le module Pipes pour qu'il exporte (rendre disponible au grand public) notre nouveau composant.

```javascript
// ...
@NgModule({
  // ..
  // On exporte le module, comme pour dire : Hey ce Pipe est utilisable !
  exports: [MonPipePipe]
})
export class PipesModule { }

```

Il vous faut ensuite importer le module Pipes dans le module de la page dans laquelle vous souhaitez l'utiliser (pour respecter le lazy loading) :

**src/mapage/mapage.module.ts**

```javascript
// ...

// Import du module Pipe
import { PipesModule } from './../pipes/pipes.module';

@NgModule({
  declarations: [
    // ...
  ],
  imports: [
    // ...
    PipesModule, // On déclare notre module Pipes ici
    // ...
  ]
```

La logique du Pipe (comment il intéragit avec l'élément qui l'appelle) est à gérer dans le fichier **src/app/pipes/mon-pipe.pipe.ts**

```javascript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'monPipe'
})
export class MonPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    // value est le contenu à modifier
    // Ici on rajoutera un hashtag (#) avant la valeur
    return `#${value}`;
  }

}

```

Nous pouvons désormais appeler notre pipe sans problème depuis le html de notre page

**src/mapage/mapage.page.html**

```html

<!-- ... ici on rajoute un hashtag au contenu de maVariable-->
<span>{{maVariable | monPipe}}</span>

```
