const cityPollutions = {
  airQualityToken: "ef152b458d54e50d94ab784a2225b73286179bbf",
  airQualityURL: "https://api.waqi.info/feed",
  inputLocation: document.getElementById("input-city"),
  valuesList: [],
  cities: [],
  polluants: [
    { desc: "Particulate <2.5 microns", abb: "pm25" },
    { desc: "Particulate <10 microns", abb: "pm10" },
    { desc: "Carbon Monoxide", abb: "co" },
    { desc: "Sulfur Dioxide", abb: "so2" },
    { desc: "Nitrogen Dioxide", abb: "no2" },
    { desc: "Ozone", abb: "o3" }
  ],
  addTooltip(element, value) {
    element.classList = "tooltip";
    const description = this.polluants.find(function(polluant) {
      return polluant.abb === value;
    }).desc;
    element.setAttribute("data-tooltip", description);
  },
  getEmptyMessage(type) {},
  noCityError(message) {
    // Créer un élément DOM paragraph
    // Récupérer l'élément dans lequel insérer le paragraph (tip = parentElement)
    // Setter le message du paragraphe
    // Setter la class 'form-input-hint' au paragraphe
    // Ajouter le paragraphe au bon élément
    // Ajouter la class 'has-error' au bon élément
    // Attendre 3 secondes et retirer le paragraphe et la class 'has-error'
    // et gérer le loading du bouton Check Air quality
  },
  bodyRow() {
    // Créer une ligne <tr>

    // Contruire la liste de colonnes à insérer dans la tableau
    const columns = [];
    // Créer et ajouter les objets colonnes de polluants à la l'array columns

    // Créer et ajouter les objets colonnes City et AQI

    // Ajouter les colonnes
    this.addColumnsToRow(columns);

    // Retourner la ligne
  },
  addColumnsToRow(columns) {
    // Pour chaque element colonne...
    for (let i = 0; i < columns.length; i++) {
      // Extraire les variables nécéssaires à l'objet colonne courant
      // const elementType = columns[i].elementType;
      // const value = columns[i].value;
      // const row = columns[i].row;
      const { elementType, value, row } = columns[i];

      // Créer l'élément DOM colonne (tip = createElement)
      let col;
      if (typeof elementType === "string") {
        col = document.createElement(elementType);
      } else {
        col = elementType;
      }
      // Setter la valeur de la colonne (tip = innerHTML)
      col.innerHTML = value;
      // Ajouter la colonne à la ligne
      // 2. à la position demandée (tip = prepend ou append)
      row.append(col);
    }

    // 2. Gérer l'appel d'un fonction de callback
  },
  addRow() {
    // Récupérer le <body> du tableau
    // Récupérer la ligne construite du body
    // Ajouter la ligne à l'élément <tbody> (tip = appendChild)
  },
  buildTable(aqi, polluants, city) {
    // Créer une liste d'objets des polluants [{ abb: key, value: value}, {...]...
    // Récupérer la liste des keys de polluants (tip = Object.keys)
    const polluantsKeys = Object.keys(polluants);

    // Grâce à la méthode .map()...
    let array = polluantsKeys.map(function(key) {
      // Récupérer la valeur de la key courante
      const polluantValue = polluants[key]["v"];
      // Créer un objet contenant les clefs abb et value
      return { abb: key, value: polluantValue };
    });

    // Ajouter les objets city et l'AQI à la liste/array
    array.push({ abb: "AQI", value: aqi }, { abb: "City", value: city });

    // Récupérer les abbréviations de polluants dans un tableau (tip = map())
    const abbPolluants = this.polluants.map(function(poll) {
      return poll.abb;
    });

    // Filtrer l'array d'objets avec le tableau d'abbréviations (tip = filter(), includes())
    this.valuesList = array.filter(function(obj) {
      if (
        abbPolluants.includes(obj.abb) ||
        obj.abb === "AQI" ||
        obj.abb === "City"
      ) {
        return true;
      }
    });

    // 2. Si la ville n'est pas déjà dans le tableau, l'ajouter à this.cities (tip = indexOf)

    // 2. Gérer le cas où le tableau a déjà été initialisé
    // 2. Ajouter une ligne dans le body du tableau et stopper la fonction

    // Récupérer l'élément du DOM où injecter le tableau
    let container = document.getElementById("table-result");

    // Créer un élément table
    let table = document.createElement("table");

    // Ajouter au tableau les class nécéssaires cf framework CSS
    table.classList = "table table-striped table-hover";

    // Créer un élément <thead>
    let tHead = document.createElement("thead");

    // Créer une ligne <tr>
    let headRow = document.createElement("tr");

    // Contruire la liste de colonnes à insérer dans la tableau
    let columns = [];
    for (let i = 0; i < this.polluants.length; i++) {
      const element = document.createElement("th");
      const optionsObj = {
        elementType: element,
        value: this.polluants[i].abb,
        row: headRow
      };
      columns.push(optionsObj);
    }

    // Créer et ajouter les colonnes City et AQI
    const cityColumn = { elementType: "th", value: "City", row: headRow };
    const aqiColumn = { elementType: "th", value: "AQI", row: headRow };
    columns.push(cityColumn, aqiColumn);

    // Ajouter l'ensemble des colonnes
    this.addColumnsToRow(columns);

    // Ajouter la ligne à l'élément <thead> (tip = appendChild)
    tHead.appendChild(headRow);

    // Ajouter le <thead> au tableau
    table.appendChild(tHead);

    // Créer un élément <tbody> et lui ajouter une class

    // Ajouter la ligne à l'élément <tbody>

    // Ajouter le <tbody> au tableau

    // Ajouter le tableau final au container
    container.appendChild(table);
  },
  getValues(city, myCallback) {
    // Gérer la réponse asynchrone de la requête

    if (!city) {
      // Gérer le cas où le paramètre city est vide
    } else {
      // Contruire l'url et ses paramètres
      const url = new URL(this.airQualityURL + "/" + city + "/");
      const params = { token: this.airQualityToken };
      url.search = new URLSearchParams(params).toString();

      // Utiliser la méthode fetch (=== Méthode Ajax)
      fetch(url, { headers: { "Content-Type": "text/plain" } }).then(
        response => {
          response.json().then(res => {
            // Dans la response du fetch vérifier le status
            if (res.status === "ok") {
              myCallback();
              // Créer les variables aqi, iaqi et city à partir des data de la réponse
              const aqi = res.data.aqi;
              const iaqi = res.data.iaqi;
              const city = res.data.city;
              // const { aqi, iaqi, city } = res.data;
              this.buildTable(aqi, iaqi, city.name);
            }
          });
        }
      );

      // Appeler la méthode pour contruire le tableau avec les data en paramètres
      // Gérer le cas d'erreur
    }
  }
};

export default cityPollutions;
