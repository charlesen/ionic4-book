## Directives

Une directive est un élément qui va nous permettre d'étendre des fonctionnalité html. Il en existe différents types :

* **Directive de type attribut** : vous en avez déjà vu, elles permettent de modifier du html. Citons par exemple _**color**_, une directive qui permet d'attribuer la couleur passée en paramètre à l'élément concerné, ou encore la directive _**padding**_, qui permet d'ajouter un padding à l'élément qui l'invoque.

* **Directive de type composant** : oui au risque de vous embrouiller un peu, un composant est en réalité une directive, mais dotée d'un template html. La directive est en quelque sorte l'atome, le composant la molécule.

* **Directive de type structure** : Ce type de directive est fait pour la manipulation du DOM et commence toujours par un **"\*"**. On peut citer parmi celles-ci deux que nous avons déjà utilisées à savoir **\*ngIf** et **\*ngFor**.

la création d'une directive se fait simplement en saisissant la commande suivante :

```bash
$ ionic g directive maDirective

[OK] Generated a directive named maDirective!
```

Créons par exemple une directive que nous appellerons **duckborder** et qui permettra de rajouter des marges au sein de l'élément qui l'invoque.

```bash
$ ionic g directive directives/duckbolder

> ng generate directive directives/duckbolder
CREATE src/app/directives/duckbolder.directive.spec.ts (240 bytes)
CREATE src/app/directives/duckbolder.directive.ts (149 bytes)
UPDATE src/app/app.module.ts (1094 bytes)

[OK] Generated directive!
                                                         !
```

Ionic (disons plutôt Angular) utilisant par défaut le *Lazy loading* (chargement de code uniquement si nécessaire pour augmenter les performances générales), on ne peut plus vraiment déclarer notre directive de manière globale dans le module **src/app/app.module.ts**.

Pour être exploitable, la directive doit être appelée dans le module de la page ou du composant qui souhaite l'utiliser.

Si l'on souhaite par exemple appeler notre directive dans une page nommée **FeedPage** affichant notre fil d'actualité, il suffit d'éditer le module de cette page comme ceci :

**src/app/feed/feed.module.ts**

```javascript
// ...
// On appelle la Directive ici
// ...

import { DuckborderDirective } from './../directives/duckborder.directive';

@NgModule({
  // ..
  declarations: [FeedPage, DuckBorderDirective] // <!-- On déclare la directive ici-->
})
export class Tab1PageModule {}

```

Et puisqu'il a été appelé ici, il faut donc le retirer dans le fichier **src/app/app.module.ts**, s'il s'y trouve.

Il ne reste plus qu'à éditer notre directive pour qu'il fasse ce que l'on souhaite, à savoir rajouter une bordure :

```javascript

import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appDuckborder]'
})
export class DuckborderDirective {

  constructor(public element: ElementRef, public renderer: Renderer) {
    console.log('ElementRef', element);
    this.renderer.setElementStyle(this.element.nativeElement, 'border', '1px solid #000000');
  }

}

```

On peut ainsi utiliser notre nouvelle directive dans le contenu html de notre page d'accueil :

```javascript
<p appDuckborder>{{tweet.content}}</p>
```

![](/assets/ionic_directive.png)
