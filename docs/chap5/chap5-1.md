## Principes de bases

Lorsque vous lancez une application Ionic, c'est le fichier **src/index.hmlt** qui est appellé en premier.

```html
<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="utf-8" />
  <title>DuckNote</title>

  <base href="/" />

  <meta name="viewport" content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
  <meta name="format-detection" content="telephone=no" />
  <meta name="msapplication-tap-highlight" content="no" />

  <link rel="icon" type="image/png" href="assets/icon/favicon.png" />

  <!-- add to homescreen for ios -->
  <meta name="apple-mobile-web-app-capable" content="yes" />
  <meta name="apple-mobile-web-app-status-bar-style" content="black" />
</head>

<body>
  <app-root></app-root>
</body>

</html>
```

Ce point d'entrée de l'application permet de préciser  l'URL de base à utiliser pour recomposer toutes les URL relatives contenues dans l'application.

```html
<base href="/" />
```

On appelle ensuite le composant **AppComponent** dans le corps de la page html :

```html
<app-root></app-root>
```

Ce composant est lui-même définit dans le fichier **src/app/app.component.ts** :

```js
@Component({
  selector: 'app-root', // Il ne vous dit rien ce tag html (selecteur) ? 
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
  ...
  ];
```

Pour plus d'information sur le routage Angular, n'hésitez pas à consulter les documentations officielles :

* [https://ionicframework.com/blog/navigating-the-change-with-ionic-4-and-angular-router/](https://ionicframework.com/blog/navigating-the-change-with-ionic-4-and-angular-router/)

* [https://angular.io/guide/router](https://angular.io/guide/router)



