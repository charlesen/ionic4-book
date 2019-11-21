## Exercez-vous

Notre application commence à prendre forme. N'hésitez pas à revenir sur les notions étudiées aux chapitres 3 et 4.

1\) Créez la page de Login comme décrite dans ce chapitre 5 : _**Navigation entre les pages &gt; Ajout de nouvelles pages et navigation entre elles**_

```
$ ionic g page login
```

Ajustez votre code de façon à obtenir le résultat suivant :

![](/assets/ducknote_login_1.png)

2\) Faites en sorte qu'au clic sur le bouton "Se connecter" on puisse accéder à la page d'accueil.

| Page de login | Page d'accueil |
| :--- | :--- |
| ![](/assets/ducknote_login_1.png) | ![](/assets/page_accueil.png) |

3\) Modifier la page de routage pour faire de la page de Login la page par défaut

[http://localhost:8100/](http://localhost:8100/) Redirige vers [http://localhost:8100/login](http://localhost:8100/)

4\) Mettez en place le système de gards présenté dans ce chapitre.

```
$ ionic g guard guards/auth
```

Faites en sorte qu'on ne puisse afficher la page d'accueil qu'à la seule condition d'être «connecté»

5\) Nous allons à présent installer le module Ionic Storage pour sauvegarder l'état de connexion en base de donnée. 

Pour cela, saisissez les commandes suivantes depuis votre terminal:

```
$ ionic integrations enable cordova --add
$ ionic cordova plugin add cordova-sqlite-storage
$ npm install --save @ionic/storage
```

Editez ensuite le fichier **src/app/app.module.ts** :

```js
//...Autres imports...

// Import du module de Storage ICi
import { IonicStorageModule } from '@ionic/storage';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    IonicStorageModule.forRoot() // Ajout du module de storage ici
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
```



