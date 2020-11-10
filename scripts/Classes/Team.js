const newElephantBadge = document.querySelector("#add-badge");
const earsProtectorBadge = document.querySelector("#ears-protector-badge");
const teethProtectorBadge = document.querySelector("#teeth-protector-badge");
const newElephant = document.querySelector("#add");
const createTeam = document.querySelector("#validate");

export default class Team {
  constructor() {
    this._workforce = 5;
    this._members = [];
    this._color = "#fff";
    this._teethProtector = 0;
    this._earsProtector = 0;
    this._captain = 0;
  }

  setTeamMember(id, attr, value, className) {
    // Boucler sur l'ensembles des membres de l'équipe...
    // Définir l'attribut passé en paramètre du membre courant à false
    // Si l'id du membre courant correspond à l'id en paramètre
    // Définir l'attribut du membre courant avec les valeur passée en paramètre
    // Définir l'attribut avec l'id du membre courant ou reset à 0
    // Mettre à jour le DOM
  }

  updateView(attr, className) {
    // Sélectionner l'ensemble des card Elephants (tip = querySelectorAll)
    const myElephants = document.querySelectorAll(".card");

    // Mise à jour des switchs de chaque card elephant
    // Boucler sur l'ensemble des éléments cards

    // Récupérer le data-id courant (tip = getAttribute)

    // Récupérer la checkbox courante

    // Mettre à jour la clef checked de la checkbox

    // checkBox.checked = currentID === this[attr].toString();

    // Mettre à jour les badges
  }

  updateBadges() {
    const badges = [
      { key: "_earsProtector", element: earsProtectorBadge },
      {
        key: "_teethProtector",
        element: teethProtectorBadge
      }
    ];

    // Pour chaque badges...

    // Récupérer le membre dont l'attribut courant est actif (tip = filter())

    // const memberWithBadge = this._members.filter(member => member[badges[i].key]);
    // Définir l'attribut data-badge au badge courant à 1 ou 0
  }

  pickColor(color) {
    this._color = color;
  }

  getMembers() {
    return this._members;
  }

  addMember(member) {
    // Ajouter le paramètre member à la liste _members de la class
    // Définir l'attribut data-badge avec le nombre de membre de l'équipe
    // Dans le cas où l'équipe est au complet
    // Supprimer la class .disabled du bouton #validate
    // Ajouter la class .disabled au bouton #add
  }
}
