export default class Elephant {
  constructor(
    name = "",
    birth = "",
    specie = "",
    sex,
    image = "",
    currentTeam = "",
    note = "",
    myTeam
  ) {
    this.myTeam = myTeam;
    this._id = myTeam.getMembers().length + 1;
    this._name = name;
    this._image = image;
    this._note = note;
    this._birth = birth;
    this._specie = specie;
    this._sex = sex;
    this._currentTeam = currentTeam;
    this._position = "allier droit";
    this._teethProtector = false;
    this._earsProtector = false;
    this._captain = false;
  }

  updatePostion(e) {
    // Définir la _position de la class courante passée en paramètre
  }

  positionSelect() {
    let array = [
      "ailier droit",
      "ailier gauche",
      "pointe",
      "arrière centre",
      "gardien"
    ];
    // Créer un élément select
    // Ajouter au select la class .form-select
    // Pour chaque position...
    // Créer un élément option
    // Définir la value de l'élément option courrant
    // Définir le text de l'élément option courrant
    // Ajouter l'option au select
    // Définir l'action à effectuer au onchange du select
    // Retourner le select
  }

  buildImage() {
    // Créer un élément div
    // Ajouter les class .card-image et .text-center
    // Créer un élément img
    // Créer un élément figure
    // Ajouter à la balise figure les class .avatar et .avatar-xl
    // Définir la src de l'élément image créé
    // Ajouter la class .img-responsive à l'élément img
    // Ajouter l'img à la figure
    // Ajouter la figure à l'élément div
    // Retourner l'élément div
  }

  buildHeader() {
    // Cérer un élément div
    // Ajouter les class .card-header et .text-center
    // Créer un élément div pour le titre
    // Ajouter au titre les class .card-title et .h5
    // Définir le text de l'émément titre avec le nom de l'éléphant
    // Créer un élément div pour le sous-titre
    // Ajouter au sous-titre les class .card-subtitle et .text-gray
    // Ajouter le titre à l'élément div
    // Dans le cas où la date d'anniversaire est définie...
    // Définir le text du sous-titre sous la forme « Née en 1976 »
    // Ajouter le sous-titre à la div parente
    // retourner le div
  }

  onCheckboxChange(attr, className) {
    // Inverser la valeur de l'attribut de type booléen (tip => true === !false && false === !true)
    // Mettre à jour l'éléphant de la team
  }

  newCheckbox(title, className, funct) {
    // Créer un élément label
    // Ajouter la class .form-switch
    // Créer un élément input
    // Définir le type de l'input
    // Ajouter la class passée en paramètre
    // Définir la fonction au onchange passée en paramètre
    // Créer un élément i
    // Ajouter à l'élément i la class .form-icon
    // Définir le text label avec le titre passé en paramètre
    // Ajouter l'input au label
    // Ajouter l'icone au label
    // Retourner le label
  }

  buildBodyCard() {
    // Créer un élément de type article
    // Ajouter à l'article la class .card-body
    // Créer un élément paragraph
    // Créer un tableau d'objets selon le format [{ label: 'Mon label', value: 'Ma value'}] contenant les labels
    // Espèce, Sexe, Équipe actuelle, Note
    // Pour chaque élément du tableau... (tip = forEach)
    // ajouter le HTML au paragraph (tip = innerHTML)
    // Ajouter le paragraph à l'article
    // Ajouter un élément select des positions à l'article
    // Créer 3 checkbox pour les options Capitaine, Protections d'oreilles et Protège dents
    // Ajouter les 3 checkbox à l'article
    // Retourner l'article
  }

  /**
   * 1.
   */
  create() {
    // Sélectionner l'élément du DOM avec la class .elephants
    // Créer une nouvelle div
    // Lui ajouter les class .column .col-4 .col-lg-12
    // Créer un élément HTML de type article
    // Lui ajouter la class .card
    // Lui attribuer un attribut data-id (tip = setAttribute)
    // Contruire un élément image pour la card
    // Contruire un élément header pour la card
    // Contruire un élément body pour la card
    // Ajouter chaque élément contruit à la card (image, header, body) (tip = appendChild)
    // Ajouter ma card à ma div
    // Ajouter ma div dans l'élément .elepants du DOM (tip = appendChild)
  }
}
