### Ionic storage

Basé sur la librairie LocalForage, le module Ionic Storage utilise différents moteurs de stockage comme SQLite ou IndexedDB, en choisissant par défaut le moteur de stockage disponible : 

* Lorsque l'application est executé dans un contexte natif, Ionic Storage donne la priorité à l'utilisation de SQLite, qui est l'une des bases de données sur fichiers les plus stables et les plus largement utilisées pour le stockage de données mobiles. L'utilisation de SQLite permet d'évite les nombreuses limitations  de mémoire rencontrées avec localstorage et IndexedDB.
* Lorsqu'il est exécuté sur le Web ou en tant qu'application Web progressive, Ionic Storage tente successivement l'utilisation d'IndexedDB, WebSQL et localstorage, dans cet ordre là. 

Il est également tout à fait possible préciser un tout ordre que celui par défaut \(SQLite &gt; IndexedDB &gt; WebSQL &gt; LocalStorage\). On pourrait très bien mettre IndexedDB en premier et SQLite en dernier, même si cette configuration là est loin d'être la plus optimale.



Installation et exemples d'utilisation



