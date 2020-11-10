const geoCityKey = "916e58fc6ac14f66a32551ffdac6567b";
const geoCityURL = "https://api.opencagedata.com/geocode/v1/json?";
const geolocationOptions = {
  maximumAge: 10000,
  timeout: 3000,
  enableHighAccuracy: true
};
const ipURL = "https://ipapi.co/json/";
const btnAirQuality = document.getElementById("btn-air-quality");
const iconLocation = document.querySelector(".icon-location");
const inputLocation = document.getElementById("input-city");
import cityPollutions from "./modules/cityPollutions.js";

// Déclaration d'une variable cityResponse
let cityResponse;

function getCity(coords, callback) {
  // Construire l'url
  const url = new URL(geoCityURL);
  // Construire les paramètres de la requête (tip = params: q, key, pretty)
  const query = coords.latitude + " " + coords.longitude;
  const query1 = `${coords.latitude} ${coords.longitude}`;
  const params = { q: query1, key: geoCityKey, pretty: 1 };
  // Ajouter les paramètres à l'url (tip = new URLSearchParams)
  url.search = new URLSearchParams(params).toString();

  // Initialiser et envoyer la requête (Ajax méthode)
  const Http = new XMLHttpRequest();
  Http.open("GET", url);
  Http.setRequestHeader("Content-Type", "text/plain");
  Http.send();
  // Récupérer la réponse de la requête au bon status (>200  && >400)
  Http.onreadystatechange = function() {
    if (Http.readyState === XMLHttpRequest.DONE) {
      const status = Http.status;
      if (status === 0 || (status >= 200 && status < 400)) {
        cityResponse = JSON.parse(Http.responseText).results;
        if (callback) {
          callback(cityResponse);
        }
      }
    }
  };
}

function toggleLocationLoading() {
  const classes = iconLocation.classList;
  if (classes.contains("loading")) {
    classes.remove("loading");
    classes.add("icon-location");
  } else {
    classes.add("loading");
    classes.remove("icon-location");
  }
}

function getCityCallback(result) {
  if (result) {
    inputLocation.value =
      result[0].components.state_district || result[0].components.county;
  }
  toggleLocationLoading();
}

function successGeolocation(position) {
  // Gérer le cas où les coordonnées sont vides
  if (position.coords) {
    // Récupérer la ville grâce aux coordonnées
    getCity(position.coords, getCityCallback);
  } else {
    errorGeolocation();
  }
}

function errorGeolocation(err) {
  // Récupérer les coordonnées par API
  let xhrObject = new XMLHttpRequest();
  xhrObject.open("GET", ipURL);
  xhrObject.setRequestHeader("Content-Type", "text/json");
  xhrObject.send();

  xhrObject.onreadystatechange = function() {
    if (xhrObject.readyState === XMLHttpRequest.DONE) {
      if (
        xhrObject.status === 0 ||
        (xhrObject.status >= 200 && xhrObject.status < 400)
      ) {
        // Récupérer la ville grâce aux coordonnées dans la réponse API
        getCity(
          {
            latitude: JSON.parse(xhrObject.responseText).latitude,
            longitude: JSON.parse(xhrObject.responseText).longitude
          },
          getCityCallback
        );
      }
    }
  };
}

function checkGeolocation() {
  // Utiliser l'objet navigator pour récupérer la position
  // Ne pas oublier les options à passer en paramètre
  // Gérer le retour en success et en error
  navigator.geolocation.getCurrentPosition(
    successGeolocation,
    errorGeolocation,
    geolocationOptions
  );

  toggleLocationLoading();
}

function init() {
  /**
   * 1. Geolocation
   */

  // Vérifier la géolocation
  checkGeolocation();

  // Ajouter un event au click sur l'icone location
  iconLocation.addEventListener("click", function() {
    // Si l'input n'est pas vide vérifier la géolocation
    //if (!inputLocation.value) {
    checkGeolocation();
    //}
  });

  /**
   * 2. Pollution
   */

  // Ajouter un event au click sur check air quality
  btnAirQuality.addEventListener("click", function(event) {
    event.preventDefault();

    // Gérer le loading du bouton en ajoutant la class .loading
    btnAirQuality.classList.add("loading");

    // Gérer la récupération des valeurs dans le module cityPollutions
    cityPollutions.getValues(inputLocation.value, function() {
      btnAirQuality.classList.remove("loading");
    });
  });

  // 2. Vérifier la value de l'input city à chaque modification (tip = event input)
}

// Appeler la fonction init
init();
