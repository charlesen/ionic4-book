## Exercez-vous

1\) Créez la page **Profile** précédente et configurez là pour quelle soit dans le thème de l'application. Corrigez les bugs éventuels.

2\) Ionic permet de modifier les styles de n'importe quel élément de notre application. Faites des modifications sur les propriétés suivantes depuis le fichier **src/theme/variables.scss** : _--ion-background-color_, _--ion-background-color-rgb_, _--ion-text-color, --ion-text-color-rgb_ et _--ion-toolbar-color._ 

Exemple : 

```css
--ion-background-color	: #fefefe;
```

Pour plus d'informations, vous pouvez consulter la documentation complète à l'adresse [https://ionicframework.com/docs/theming/themes](https://ionicframework.com/docs/theming/themes) .

Que remarquez-vous ?

2\) Dans la fonction **gotoHome**, remplacez **"push"** par **"setRoot" **: **this.navCtrl.setRoot\(UnePage\)**. Que constatez-vous ?

3\) A l'aide des composants Ionic, créez une page de profil pour notre application \(style libre\) : [https://ionicframework.com/docs/components](https://ionicframework.com/docs/components)

4\) Testez d'autres composants

5\) Créez une page Setting et ajoutez à cette page un formulaire avec des éléments simples : nom, prénom, adresse,...

