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
