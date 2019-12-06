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

Il faut ensuite de modifier notre module \(components.module.ts\) de la manière suivante (Certaines version de Ionic et Angular font ce travail pour vous):

**src/app/components/components.module.ts**

```javascript
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { FeedComponent } from './feed/feed.component';

@NgModule({
  imports: [
    CommonModule,
    IonicModule.forRoot(),
  ],
  declarations: [
    FeedComponent
  ],
  exports: [
    FeedComponent
  ],
  entryComponents: [],
})
export class ComponentsModule {}
```

Chaque fois que vous devrez créér un composant, il vous suffira de le rajouter directement dans le fichier **src/app/components/components.module.ts**.

Rappelons que les modules sont chargés du bootstrapping \(démarrage\) de composants. C'est donc ce module qu'il faudra éventuellement déclarer dans le module principal **src/app/app.module.ts**:

```js
// Modules
import { ComponentsModule } from './components/components.module';

// ...

imports: [
    BrowserModule,
    HttpClientModule,
    ComponentsModule, // Importer le module ici
    IonicModule.forRoot()
],

// ...
```

Je vous rassure, vous n'aurez pas à faire tout cela à chaque création de composant, en fait l'intérêt de regrouper tout cela dans un module permet de créer de nouveaux composants, sans devoir les redéclarer dans toute l'application.

À présent vous pouvez appeler votre composant sous forme de tag dans n'importe quel fichier html de l'application.

```js
<moncomposant></moncomposant>
```

Bravo ! Vous êtes incroyable !
