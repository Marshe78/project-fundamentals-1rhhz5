import Team from "./Classes/Team.js";
import Elephant from "./Classes/Elephant.js";

const newElephant = document.querySelector("#add");
const createTeam = document.querySelector("#validate");
const modalValidation = document.querySelector("#modal");
const randomElephantAPI = "http://82.165.22.111:80/public/elephants/random";

function checked(data) {
  return data === "Unavailable" ? "" : data;
}

// 1. Initialiser une nouvelle équipe grâce à la class Team

// 2. À l'ajout d'un nouvel éléphant...
// Gérer le loader sur le bouton (tip = class 'loading')

// Récupérer un éléphant au hasard grâce à l'API

// Transformer la réponse en json et utiliser la méthode then() pour accéder aux data

// Gérer le cas où la réponse est ok

// Initialiser une nouvelle instance de class Elephant avec les paramètres nécéssaires

// Dans le cas où l'équipe n'est pas complète

// Créer un élément HTML éléphant

// Ajouter un membre à mon équipe

// Gérer le loader dans la méthode finally()

// 3. Gérer la validation de l'équipe...
createTeam.addEventListener("click", () => {
  // check capitain, ears and teeth are used
  // pick color for the team from list
});

/**
 * Manage Modal closing hash
 */
window.addEventListener("hashchange", function() {
  if (window.location.hash === "#close") {
    modalValidation.classList.remove("active");
    history.pushState(
      "",
      document.title,
      window.location.pathname + window.location.search
    );
  }
});
