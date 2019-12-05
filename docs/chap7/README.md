# Chap 7 - Introduction au langage TypeScript, le futur de JavaScript

TypeScript est un langage de programmation libre et open source développé par Microsoft qui a pour but d'améliorer et de sécuriser la production de code JavaScript. Sortie en 2012, Il est vu par beaucoup comme le futur du Javascript, car se basant sur la norme ECMAScript 6, celle déjà intégré au moteur JavaScript de la plupart des navigateurs et qui fera foi dans les prochaines années.

TypeScript c'est donc du JavaScript, avec de supers pouvoirs.

Il est utilisé dans la plupart des Frameworks JavaScript du moment :  React, Angular, Express, VueJS,...

![](/assets/typescript_framework_1.png)![](/assets/typescript_framework_2.png)


Les fichiers définis dans ce langage ont pour extension **.ts**. Les navigateurs web ne sachant pas encore interprété du code en TypeScript pur, il est nécessaire de le compiler en JavaScript : on parle alors de transtypage.


## Comment TypeScript s'intègre à Ionic

En fait, TypeScript est présent partout ou presque dans Ionic. Les classes définies dans les fichiers .ts de chaque page sont écrites, comme vous vous en doutiez sûrement, en TypeScript :

```js
export class HomePage {
  selected : any = '';
  notes : any = [];
  constructor(public navCtrl: NavController) {
    this.notes = [
      {'id':'1', 'title':'Une Note 1', 'content':'Le contenu de la note 1'},
      {'id':'2', 'title':'Une Note 2', 'content':'Le contenu de la note 2'},
      {'id':'3', 'title':'Une Note 3', 'content':'Le contenu de la note 3'}
    ];
  }

  itemSelected(item) {
    this.selected =item;
  }

}
```

Voyons à présent plus en détails comment fonctionne ce langage de programmation.
