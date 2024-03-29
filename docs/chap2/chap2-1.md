## NodeJS, NPM et Git

### NodeJS en bref

Depuis son commencement, JavaScript, a été, comme vous le savez très certainement, un langage dit côté client. Mais les choses ont quelque peu évolué avec NodeJS : cette technologie permet en effet d’exécuter du code écrit en JavaScript, aussi bien sur un navigateur \(côté client\), que côté serveur, tout comme des langages comme Python ou encore PHP.

De plus, NodeJS, à l'instar de Ionic, est Open Source, gratuit et disponible pour différentes plateformes \(Windows, Linux, Unix, Mac OS,...\)

### NPM : Node Package Manager

Comme son nom peut le suggérer, NPM est le gestionnaire de paquets de NodeJS, dont l'écosystème est constamment enrichi de modules développés par les membres de sa large communauté.

### Installation

#### Windows et Mac OS

Pour installer NodeJS, il suffit simplement d'aller à l'adresse : [https://nodejs.org/en/download/](https://nodejs.org/en/download/), de télécharger le gestionnaire d'installation au format **.msi** pour windows et **.pkg** pour Mac OS. Laissez-vous ensuite simplement guider. Le gestionnaire installera également NPM.

![](/assets/screen_install_nodejs_1.png)

![](/assets/ionic-node-1.png)

Ouvrez ensuite un invite de commande et saisissez :

```bash
$ node -v

v10.16.3
```

Vous devriez voir s'afficher la version actuelle de NodeJs.

#### Linux \(Ubuntu\)

sous linux et en particulier Ubuntu, il vous suffit de saisir les commandes suivantes depuis un invite de commandes :

```bash
$ sudo apt-get update
$ sudo apt-get install nodejs npm
```

une fois l'installation effective, il faut encore créer les liens symboliques suivants :

```bash
$ sudo ln -s /usr/bin/nodejs /usr/local/bin/node
$ sudo ln -s /usr/bin/npm /usr/local/bin/npm
```

Pour vérifier que tout s'est bien passé, il vous suffit de saisir la commande suivante qui vous retournera la version actuelle de Node :

```bash
$ node -v

v10.16.3
```

Si vous voulez changer le répertoire d'installation des packages NPM et le mettre par exemple dans votre répertoire _**home**_ il vous suffit de faire :

```bash
$ mkdir ~/.npm-global
$ npm config set prefix '~/.npm-global'
```

Cela vous évitera de saisir à chaque fois le mot clé **"_sudo"_** à chaque installation de paquet npm en mode global \(-g\) :

Il faut ensuite mettre à jour le path de votre ordinateur pour prendre en compte ce nouveau répertoire. Editez par exemple le fichier **~/.profile** et ajoutez la ligne suivante :

```bash
export PATH=~/.npm-global/bin:$PATH
```

Pour prendre en compte immédiatement ce changement, saisissez :

```bash
$ source ~/.profile
```

Sous Windows, les manipulations ci-dessus peuvent se faire en changeant simplement ses variables d'environnement.

Vous pouvez à présent tester qu'une installation globale ne renvoie pas d'erreur de permission.

```bash
$ npm install -g ionic cordova
```

Vous pouvez également rajouter de l’auto-complétion dans l'installation de vos packages :

```bash
$ npm completion >> ~/.bashrc
```

### Git

Ionic utilise le gestionnaire de dépôt Git dans son workflow de développement actuel. Pour l'installer, rien de plus simple, il vous suffit d'aller à la page de téléchargement suivante : [https://git-scm.com/downloads](https://git-scm.com/downloads) et choisir le paquet correspondant à votre OS.

Sous Linux, il est également possible de l'installer en saisissant simplement la commande :

```
$ sudo apt install git
```

Ces éléments ajoutés à notre environnement de développement, nous allons pouvoir nous occuper d'installer Ionic, Cordova et Capacitor.
