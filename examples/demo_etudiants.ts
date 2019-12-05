class Etudiant {
  // Tableau d'étudiants
  private etudiants: any[] = [];
  constructor() {

  }

  addEtudiant(etudiant) {
    this.etudiants.push(etudiant);
  }

  getEtudiantByName(name) {
    return this.etudiants.find(etu => etu.name === name);
  }

  getEtudiantsListe() {
    return this.etudiants;
  }
}


// On teste notre nouvelle classe ici
let objEtudiant = new Etudiant();

// On ajoute un l'étudiant Jean DUPONT
objEtudiant.addEtudiant({ name: 'DUPONT', firstname: 'Jean' });

// On ajoute un l'étudiante Jeanne DUPONT
objEtudiant.addEtudiant({ name: 'DUPONT', firstname: 'Jeanne' });

// On affiche l'ensemble des étudiants
let etudiants = this.getEtudiantsListe();
console.table('Liste de tous les étudiants ', etudiants);
