## Exercez-vous

1\) Créez la page Note comme expliqué précédemment.

2\) Créez la page **Profile** précédente et configurez là pour quelle soit dans le thème de l'application. Corrigez les bugs éventuels.

Ajustez les fichiers **src/app/app.component.t**s et **src/app/app.component.html** pour obtenir le résultat suivant :

![](/docs/assets/screen_ducknote_menu.png)

Ionic utilise la bibliothèque d'iĉones _**ionicons**_, dont la documentation est disponible à l'adresse : [https://ionicframework.com/docs/v3/ionicons/](https://ionicframework.com/docs/v3/ionicons/)

3\) Ionic permet de modifier les styles de n'importe quel élément de notre application. Faites des modifications sur les propriétés suivantes depuis le fichier **src/theme/variables.scss** : _--ion-background-color_, _--ion-background-color-rgb_, _--ion-text-color, --ion-text-color-rgb_ et _--ion-toolbar-color._

Exemple :

```css
--ion-background-color    : #fefefe;
```

Pour plus d'informations, vous pouvez consulter la documentation complète à l'adresse [https://ionicframework.com/docs/theming/themes](https://ionicframework.com/docs/theming/themes) .

Que remarquez-vous ?

4\) Dans la fonction **gotoHome**, remplacez **"push"** par **"setRoot" **: **this.navCtrl.setRoot\(UnePage\)**. Que constatez-vous ?

5\) A l'aide des composants Ionic, créez une page de profil pour notre application. Laissez libre cours à votre imagination en vous inspirant des composants Ionic : [https://ionicframework.com/docs/components](https://ionicframework.com/docs/components)

6\) Testez d'autres composants

6\) Créez une page Setting et ajoutez à cette page un formulaire avec des éléments simples : nom, prénom, adresse,...Et tout autre information intéressante.

8\) Testez votre application depuis [Ionic DevApp](https://ionicframework.com/docs/appflow/devapp).

