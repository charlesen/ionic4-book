## Composants

La majorité des développements sous Angular, et comme vous l'aurez compris, sous Ionic également \(Ionic étant en fin de compte un projet Angular\), est effectué au niveau des composants. Nous avons déjà étudier le composant Root, dont l'arborescence est la suivante :

```js
app.component.css
app.component.html
app.component.spec.ts
app.component.ts
app.module.ts
```

Nous avons aussi écrit un composant **Feed** qui nous permettait d'afficher un fil d'actualités simple.

![](/assets/duckweb_3.png)

La création d'un nouveau composant se fait simplement en saisissant la commande suivante à la racine de votre projet ionic ou Angular :

```bash
$ ionic g module components # Création du module components qui stockera nos composants
$ ionic g c components/monComposant # Création de notre composant

> ng generate component components/Feed

CREATE src/app/components/feed/feed.component.scss (0 bytes)
CREATE src/app/components/feed/feed.component.html (23 bytes)
CREATE src/app/components/feed/feed.component.spec.ts (668 bytes)
CREATE src/app/components/feed/feed.component.ts (260 bytes)

[OK] Generated component!


```

Il faut ensuite modifier le module \(components.module.ts\) de la manière suivante (Certaines versions de Ionic et Angular font ce travail pour vous):

**src/app/components/components.module.ts**

```javascript
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';


import { FeedComponent } from './feed/feed.component';


@NgModule({
  declarations: [FeedComponent],
  exports: [FeedComponent],
  imports: [
    IonicModule, // Module Ionic
    CommonModule, // Module Angular
  ],
  // Pour appeler les composants Ionic (Web components)
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }

```
- **IonicModule** : Contient tous les éléments de base de Ionic
- **CommonModule** : Contient tous les éléments de base d'Angular : **directives**, **pipes**, **NgIf**,...
- **CUSTOM_ELEMENTS_SCHEMA** : permet l'affichage des composants Ionic dans des composants personnalisés.

Chaque fois que vous devrez créer un composant, il vous suffira de le rajouter directement dans le fichier **src/app/components/components.module.ts**.

Rappelons que les modules sont chargés du bootstrapping \(démarrage\) de composants. C'est donc ce module qu'il faudra éventuellement déclarer dans le module principal de la page ou de composant qui l'appelle.

Si l'on souhaite par exemple appeler ce nouveau composant dans une page nommée **Page1** (src/page1/page1.page.html), il suffit de modifier le module src/page1/page1.module.ts comme ceci :

**src/page1/page1.module.ts**:

```js
// Modules
import { ComponentsModule } from './../components/components.module';

// ...

imports: [
    //..
    ComponentsModule, // On importe le module du composant
    // ...
],

// ...
```

Une fois que c'est fait, vous pourrez appeler votre composant sous forme de tag dans le fichier html de votre page.

**src/page1/page1.page.html**:

```js
<moncomposant></moncomposant>
```

Bravo ! Vous êtes incroyable !
