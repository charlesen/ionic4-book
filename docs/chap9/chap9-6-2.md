## React et VueJS

L'un des principaux objectifs de Ionic 4 était de supprimer toute dépendance technique vis à vis d'un Framework. Ce qui signifie que les principaux composants peuvent fonctionner de manière autonome avec un simple appel de script dans une page Web.

Bien que travailler avec des frameworks puisse être idéal pour de grandes équipes de développement et pour créer de grandes applications, il est désormais possible d'utiliser Ionic en tant que bibliothèque autonome (en pure JavaScript et sans aucun Framework).

Il est cependant assez facile de l’intégrer à d'autres bibliothèques ou frameworks JavaScript comme **Angular**, **React** ou encore **VueJS**.

### Ionic React

![](/assets/logo-ionic-react.png)

Ionic React est une version native de React, le SDK open source de Facebook, qui alimente des millions de grosses applications dans le monde entier.

Ionic React permet aux développeurs de React d'utiliser leurs compétences Web existantes pour créer des applications qui ciblent iOS, Android, le Web et desktop (bureau).

Avec **@ionic/react**, il est possible d'utiliser tous les composants Ionic de base, mais avec une approche de développeur React natifs.

#### Création d'un nouveau projet

Pour démarrer un nouveau projet, il suffit de faire :

```bash
$ ionic start duckreact blank --type=react
```
Ici, on crée simplement une nouvelle application (_**duckreact**_) basée sur le template **blank** (projet nu) et optimisé pour React (_**--type=react**_)

Il suffit ensuite d'accéder au nouveau projet, avant de le lancer
```bash
$ cd duckreact
$ ionic serve -lc
```

Acceptez l'installation du package **@ionic/lab? (Y)**.

L'application devrait ensuite se lancer et s'afficher depuis votre navigateur.

![](/assets/duckreact_1.png)

Rien de bien transcendant pour l'instant.

#### Architecture d'un projet React Ionic
```bash
$ ls -al

ionic.config.json
node_modules
package.json
package-lock.json
public
src
tsconfig.json
tslint.json

```

La base de notre application se situe dans le dossier **src** et le point d'entrée principal est défini dans le fichier **src/index.tsx** :

```javascript

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

```

On commence par importer les dépendances nécessaires à l'utilisation des composants React (2 premières lignes) et

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
```

la troisième ligne importe le composant principal nommé App. C'est ce dernier qui permettra le bootstraping (démarrage) de notre application

```javascript
import App from './App';
// ....
ReactDOM.render(<App />, document.getElementById('root'));
```

Le dernier import est utilisé pour passer en mode PWA en démarrant un Service worker, qui va booster le chargement de l'application et permettre son utilisation en mode hors-connexion.

```javascript
import * as serviceWorker from './serviceWorker';
// ....
serviceWorker.unregister();
```

Découvrons à présent le contenu du fichier **src/App.tsx** ressemblant à peu près ceci :

```javascript
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

/*
* Import de plusieurs fichiers CSS..
...
...
*/

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;

```

Décortiquons un peu tout cela.
```javascript
import React from 'react';
```

La première ligne va importe le package React. Ce qui va nous permettre d'écrire des composants dans une syntaxe proche du HTML appelée JSX.

On importe ensuite le système de routage propre à React

```javascript
import { Route } from 'react-router-dom';
```

La suite des imports concerne les composants Ionic optimisés pour React.

```javascript

import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
```

On finit en important notre première page nommée **Home**, ainsi que quelques styles CSS.

```javascript
import Home from './pages/Home';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

// ....

```

Dans la suite du code, on découvre notre premier composant React, avec configuration d'un routage simple :

```javascript

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

```

- l'url http://localhost/home permet d'afficher la page Home
- Sinon on affiche la page racine (/), qui elle-même redirige par défaut vers la page Home.

![](/assets/duckreact_2.png)

Observons à présent le contenu du fichier **src/pages/Home.tsx** :

```javascript

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Ionic Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        The world is your oyster.
        <p>
          If you get lost, the{' '}
          <a target="_blank" rel="noopener noreferrer" href="https://ionicframework.com/docs/">
            docs
          </a>{' '}
          will be your guide.
        </p>
      </IonContent>
    </IonPage>
  );
};

export default Home;
```
On retrouve quand même un peu ce que l'on observait  dans les pages Ionic Angular.

En effet, Le composant Home est composé lui-même de plusieurs autres composants, s'imbriquant les uns à la suite des autres : **IonPage > IonHeader > ...IonContent**.

Modifions le contenu du composant IonContent comme ceci :

```javascript
import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  // On importe de nouveaux composants...
  IonList, IonItem, IonCheckbox, IonNote, IonLabel, IonBadge
} from '@ionic/react';

// Icon d'ajout utilisé par le composant FabButton
import { add } from ‘ionicons/icons’;

// Import du composant Props
import {RouteComponentProps} from 'react-router';

const Home: React.FC<RouteComponentProps> = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>DuckNote - React</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem>
            <IonCheckbox slot="start" />
            <IonLabel>
              <h1>Projet Ionic</h1>
              <IonNote>repartir les rôles, démarrer un trello..</IonNote>
            </IonLabel>
            <IonBadge color="success" slot="end">
              2 jours
            </IonBadge>
          </IonItem>
        </IonList>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => props.history.push('/new')}>
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>

      </IonContent>
    </IonPage>
  );
};

export default Home;

```

![](/assets/duckreact_3.png)

Remarquez la ligne suivante

```javascript
<IonFabButton onClick={() => props.history.push('/new')}>
  <IonIcon icon={add} />
</IonFabButton>
```

On y appelle le composant FabButton (https://ionicframework.com/docs/api/fab-button) pour afficher une nouvelle page (**/new**).

Pour que l'action **onClick** associé au composant puisse fonctionner, nous allons devoir :
- Créer une nouvelle page pour afficher l'url /new : elle nous permettra de créer une nouvelle note
- Mettre à jour la table de routage pour permettre au composant principal (**App**) de faire le lien entre l'url **/new** et notre nouveau composant.

Éditons le fichier **src/App.tsx** :

```javascript
import Home from './pages/Home';

// Import de la page Note (non encore créée)
import Note from './pages/Note';
...
const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/home" component={Home} />
          <Route path="/new" component={Note} />
          <Redirect exact from="/" to="/home" />
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
}
export default App;
```

Créons à présent notre nouvelle page Note. Nous allons faire manuellement, Ionic ne permettant pas encore de le faire en ligne de commande.

```bash
$ ionic g page
[ERROR] Cannot perform generate for React projects.

```

Créez le fichier **src/pages/Note.tsx** en ajoutant les lignes suivantes :

```javascript
import React from 'react';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonItem,
  IonTextarea,
  IonToolbar
} from '@ionic/react';


const Note: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>Nouvelle note</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItem>
          <IonTextarea rows={32} placeholder="Saisir une note..."></IonTextarea>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};
export default Note;

```

Qui permet d'afficher le rendu suivant, en appuyant sur le bouton FAB en page d'accueil :

![](/assets/duckreact_4.png)

Voir la documentation pour chaque composant (côté React) sur : https://ionicframework.com/docs/api/

### Ionic Vue (version Bêta)
![](/assets/logo-ionic-vue.png)

Actuellement en version Beta.

La documentation sera mise à jour une fois qu'une version stable sera livrée.


### Annexes
- Build Your First Ionic React App : https://ionicframework.com/docs/react/your-first-app
- Documentation officielle de React : https://reactjs.org/
- Using Ionic 4 Components in Your Vue.js Apps : https://alligator.io/vuejs/vue-ionic/
- Composants Ionic : https://ionicframework.com/docs/api/
