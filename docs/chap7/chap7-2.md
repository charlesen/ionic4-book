## Types de base

Contrairement à JavaScript où les types sont définis au moment de l'initialisation d'une variable, TypeScript propose un typage de variable beaucoup plus fort.

La définition générale d'une variable se fait de la manière suivante :

```javascript
let nomDeLaVariable: leTypeDeBase [= valeur par défaut - Optionnelle];
```

### Booléens

```javascript
let isConnected: boolean = false;
```

### Nombres

```javascript
let valeur_decimal: number = 6;
let valeur_binary: number = 0b1010;
let valeur_octal: number = 0o744;
let valeur_hex: number = 0xf00d;
```

### String

```javascript
let color: string = "blue";
color = 'red'; # On a le choix entre les guillemets simples ou doubles
```

Chose intéressante pour les chaînes de caractères, il est possible de les utiliser sous forme de template, un truc que l'on rencontrait jusqu'à lors dans des langages de haut niveau comme Python ou PHP.

```javascript
let fullName: string = `Charles EDOU NZE`;
let age: number = 32;
let year: number = 2019;
let sentence: string = `Salut, mon nom est ${ fullName }. Nous sommes en ${ year }.
                        J'aurai ${ age + 1 } ans l'année prochaine.`;
```

**Résultat :** *Salut, mon nom est Charles EDOU NZE. Nous sommes en 2019. J'aurai 33 ans l'année prochaine.*

On aurait pu obtenir le même rendu en concaténant des chaînes de caractères avec le signe "+". Mais avouons-le, c'est quand même moins pratique !

### Les tableaux

```javascript
let list_nombres_premiers: number[] = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
```

### Any

On l'utilise quand on ne sait pas trop qu'elle type de données on aura à traiter. C'est souvent le cas quand on utilise un API propriétaire.

```javascript
let variableMystere: any = 4;
variableMystere = "c'est une chaine de caractère";
variableMystere = false; // ou un booléen finalement
```

Attention, si l'on définit une variable avec un type de base, autre que any, un changement de type à la volée renverrait une exception.

Par exemple, si vous avez définit la variable *isConnected* en tant que booléen.

Il ne sera pas possible d'attribuer une valeur de type chaîne de caractère (string) à cette variable

```javascript
let isConnected: boolean = false;
isConnected = "true"; // Renvoie une exception !
```

Lorsque aucun type n'est précisé lors de la déclaration d'une variable, celle-ci est considérée comme étant de type *any*.
