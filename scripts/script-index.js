/**
 * Exercie #1
 * Switch Tab
 */

const navTabs = document.querySelector(".tab");
const tabItems = navTabs.children;
const contentItems = document.querySelectorAll(".content > li");

// Ajouter un event click sur la barre de navigation
navTabs.addEventListener("click", function(event) {
  console.log("test");
  // Transformer en array la liste (HTMLCollection) de tab contentItems
  const arrayItems = Array.from(tabItems);

  // Stocker dans une variable l'index de l'élément cliqué (tip = indexOf)
  const currentIndex = arrayItems.indexOf(event.target.parentElement);

  // Pour chaque éléments...
  for (let i = 0; i < contentItems.length; i++) {
    // ...masquer les contenus (tip = style)
    contentItems[i].style.display = "none";

    // rendre tous les tabs inactifs (tip = classList)
    tabItems[i].classList.remove("active");
  }

  // Ajouter la class "active" au tab cliqué
  tabItems[currentIndex].classList.add("active");

  // Afficher le contenu ciblé grâce à l'index  (tip = style)
  contentItems[currentIndex].style.display = "block";
});

/**
 * Exercice #2
 * Expand
 */

// Récupérer les éléments avec la class .expand-title

const expandTitles = document.getElementsByClassName("expand-title");

// Pour chaque expand-title...
for (let i = 0; i < expandTitles.length; i++) {
  // Ajouter un event click à chaque élément expend title
  expandTitles[i].addEventListener("click", function(e) {
    // Stocker l'élément titre cliqué (l'icone doit être également cliquable)
    const title = e.target.classList.contains("icon")
      ? e.target.parentElement
      : e.target;

    // Gérer le cas où l'élément titre a la class .open...
    const siblingList = title.nextElementSibling;
    const icon = title.querySelector(".icon");

    // Ouvrir l'élément expand-content (tip = maxHeight) Gérer l'animation de l'icon
    if (title.classList.contains("open")) {
      siblingList.style.maxHeight = 0;
      icon.classList.replace("icon-arrow-up", "icon-arrow-down");
    } else {
      siblingList.style.maxHeight = 300;
      icon.classList.replace("icon-arrow-down", "icon-arrow-up");
    }

    // Ajouter/Supprimer la class open à l'élément title
    title.classList.toggle("open");
  });
}

/**
 * Exercice #3
 * Features Localstorage
 **/

/**
 * Récupérer tous les éléments switch
 *
 * Récupérer le storage du browser
 *
 * Pour chaque switch...
 *
 * Gérer les 2 cas où le storage existe/pas
 *
 * Pour chaque élément du storage...(tip = some)
 * Mettre à jour la value checked correspondant au bon titre (tip = element.checked)
 *
 * Mettre à jour l'array avec le nouvel objet { title: myTitle, checked: false } (tip = push)
 *
 * Ajouter un event click à chaque élément...
 * Récupérer le storage du browser
 * Mettre à jour la valeur de checked de l'input correspondant à l'élement cliqué
 * Mettre à jour le storage récupéré (tip = some)
 * Mettre à jour le storage du browser
 *
 * Dans le cas où le browser n'a aucun storage...
 * Mettre à jour le storage avec l'array d'objets
 */
