## Composant Liste

Comme son nom peut le suggérer, ce composant va nous permettre d'ajouter une liste d'éléments à notre application. C'est ce composant qui est utilisé dans l'écran **Rappels** de l'application DuckNote, et celui qui servira à afficher nos listes de notes.

**src/app/list/list.page.html**

```html
<ion-header>
  <ion-toolbar color="ducknote">
    <ion-buttons slot="start">
      <ion-menu-button></ion-menu-button>
    </ion-buttons>
    <ion-title>
      Rappels
    </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-list>
    <ion-item *ngFor="let item of items">
      <ion-icon [name]="item.icon" slot="start"></ion-icon>
      {{item.title}}
      <div class="item-note" slot="end">
        {{item.note}}
      </div>
    </ion-item>
  </ion-list>
  <!-- ... -->
</ion-content>
```

**src/app/list/list.page.ts**

```javascript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor() {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  ngOnInit() {
  }
}
```


Documentation : [https://ionicframework.com/docs/components/\#lists](https://ionicframework.com/docs/components/#lists)
