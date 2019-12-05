## Installation et premier script

Ionic utilise une version *interne* du compilateur TypeScript et pour nos tests nous allons devoir installer le package de manière globale.

```
> npm install -g typescript
```

Créons nouveau dossier qui nous permettra de faire nos tests avec TypeScript.

Ajoutez le fichier **demo\_typescript.ts** et tant qu'à faire ajoutons-y du contenu :

**demo\_typescript.ts**

```js
function ditBonjour(person) {
    return "Bonjour, " + person;
}

let user = "Charles";

document.body.innerHTML = ditBonjour(user);
```

Il faut ensuite compiler ce code pour générer un fichier **.js** interprétable par le navigateur.

```bash
$ tsc demo_typescript.ts #compilation
$ ls -l
total 304
-rw-rw-r--   1 charles charles   6180 avril 11 22:14 config.xml
-rw-rw-r--   1 charles charles    131 avril 13 07:12 demo_typescript.js
-rw-rw-r--   1 charles charles    133 avril 13 07:04 demo_typescript.ts
```

Si vous rencontrez des exceptions de ce type :

- **Cannot find name 'console'. Do you need to change your target library? Try changing the `lib` compiler option to include 'dom'**, ou encore
- **error TS2339: Property 'find' does not exist on type 'any[]'.**

Créez simplement un fichier tsconfig.json dans le répertoire de votre projet, avec la configuration suivante :

**tsconfig.json**

```js
{
  "compilerOptions": {
    "lib": [
      /* Permet d'utiliser le DOM (document) et
        la librairie standard inclus dans ES6 */
      "dom",
      "es6"
    ]
  },
  /* On ne compile pas (exclusion) les fichiers du dossiers npm
    et  ceux des tests unitaires (spec.ts)*/
  "exclude": [
    "node_modules",
    "**/*.spec.ts"
  ]
}
```

On obtient après compilation le fichier JavaScript suivant :

**demo\_typescript.js**

```js
function ditBonjour(person) {
    return "Bonjour, " + person;
}
var user = "Charles";
document.body.innerHTML = ditBonjour(user);
```

Bien évidemment le contenu du fichier **demo\_typescript.js **est strictement le même que celui du fichier **.ts**, car ce code est relativement simple.

Ajoutons à présent un peu plus de choses, comme une Classe, ainsi que des méthodes.

**demo_etudiants.ts**

```js

class Etudiant {
  private etudiants: string[] = [];
  constructor() {

  }

  addEtudiant(etudiant) {
    this.etudiants.push(etudiant);
  }

  getEtudiantByName(name) {
    return this.etudiants.find((etu) => etu.name == name);
  }

  getEtudiantsListe() {
    return this.etudiants;
  }
}


// On teste notre nouvelle classe ici
let objEtudiant = new Etudiant();

// On ajoute un l'étudiant Jean DUPONT
objEtudiant.addEtudiant({nom:'DUPONT', prenom:'Jean'});

// On ajoute un l'étudiante Jeanne DUPONT
objEtudiant.addEtudiant({nom:'DUPONT', prenom:'Jeanne'});

// On affiche l'ensemble des étudiants
let etudiants = this.getEtudiantsListe();
console.table('Liste de tous les étudiants ',etudiants);


```

On compile le fichier :
```bash
 $ tsc demo_etudiants.ts
```

Si tout s'est bien passé, vous devriez obtenir le contenu JavaScript suivant :
```javascript

var Etudiant = /** @class */ (function () {
    function Etudiant() {
        // Tableau d'étudiants
        this.etudiants = [];
    }
    Etudiant.prototype.addEtudiant = function (etudiant) {
        this.etudiants.push(etudiant);
    };
    Etudiant.prototype.getEtudiantByName = function (name) {
        return this.etudiants.find(function (etu) { return etu.name === name; });
    };
    Etudiant.prototype.getEtudiantsListe = function () {
        return this.etudiants;
    };
    return Etudiant;
}());
// On teste notre nouvelle classe ici
var objEtudiant = new Etudiant();

// On ajoute un l'étudiant Jean DUPONT
objEtudiant.addEtudiant({ name: 'DUPONT', firstname: 'Jean' });

// On ajoute un l'étudiante Jeanne DUPONT
objEtudiant.addEtudiant({ name: 'DUPONT', firstname: 'Jeanne' });

// On affiche l'ensemble des étudiants
var etudiants = this.getEtudiantsListe();
console.table('Liste de tous les étudiants ', etudiants);

```

Voilà ! La différence entre les deux langages est un peu plus parlante cette fois-ci.
