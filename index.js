// Oefeningen ES Syntax

// 1. Array methodes (map, filter, reduce, some, every, forEach)

// Oefening 1:
// Gegeven: Array van temperaturen in Celcius:
const temperaturesInCelcius = [0, 15, 22, -5, 30];

// TODO: Gebruik nu een methode om een nieuwe array te creëren met deze temperaturen omgezet naar Fahrenheit.
// Formule: Fahrenheit = Celcius * 9/5 + 32

// Oefening 2:
// Gegeven: Array van nummers:
const nummers = [3, 6, 8, 10, 15, 20];

// TODO: Gebruik nu een methode om een nieuwe array terug te geven waarin enkel nog maar even getallen in zitten.

// Oefening 3:
// Gegeven: Array van student objecten
const studenten = [
  {
    voornaam: "Emma",
    achternaam: "De Vries",
    leeftijd: 20,
    isGeverifieerd: true,
  },
  {
    voornaam: "Liam",
    achternaam: "Janssen",
    leeftijd: 22,
    isGeverifieerd: false,
  },
  {
    voornaam: "Sofie",
    achternaam: "Bakker",
    leeftijd: 19,
    isGeverifieerd: true,
  },
  {
    voornaam: "Noah",
    achternaam: "Visser",
    leeftijd: 21,
    isGeverifieerd: false,
  },
  { voornaam: "Julia", achternaam: "Smit", leeftijd: 23, isGeverifieerd: true },
];

// TODO: Gebruik nu een methode om alle leeftijden op te tellen van de studenten die geverifieerd zijn (dus enkel waarbij isGeverifieerd = true).

// 2. Destructuring

// Oefening 1:
// Gegeven: Een student object
const student = {
  voornaam: "John",
  achternaam: "Doe",
  scores: {
    web1: 12,
    web2: 15,
    web3: 10,
    mobile: 8,
  },
};

// TODO: Gebruik destructuring om de volgende variabelen voornaam, achternaam en mobile (score) uit het object te halen.

// Oefening 2:
// Gegeven: De coördinaten array
const coordinaten = [12.5, 45.3, 7.8, 4.25, 50.487];

// TODO: Gebruik destructuring om de eerste twee variabelen toe te wijzen aan x en y, en de rest aan een array rest.

// 3. Rest parameter en spread operator

// Oefening 1:
// Gegeven: Twee objecten (persoon, contact)
const persoon = { naam: "Tom", leeftijd: 34 };
const contact = { email: "tom@example.com", telefoon: "1234567890" };

// TODO: Gebruik de spread operator om deze twee objecten te combineren tot één nieuw object volledigProfiel

// Oefening 2:
// Gegeven: /

// TODO: Schrijf een functie berekenGemiddelde() die een onbekend aantal parameters accepteert met behulp van de rest-parameter en het gemiddelde van deze nummers retourneert.
// Test dit uit op de nummers array van sectie 1 / oefening 2.

// 4. Callbacks

// Oefening 1:
// Gegeven: /

// TODO: Schrijf een functie verwerkData(data, callback) die een data-array en een callback-functie accepteert. De functie moet de callback toepassen op elk element in de data-array met behulp van de forEach() methode.
// Voorbeeld van een callback functie: een functie die elk item vermenigvuldigt met 75.

// 5. Promises

// Oefening 1:
// Gegeven: Voorraad array met productId's in.
const voorraad = [
  "prodA3F9",
  "prodZ7K2",
  "prodX8P1",
  "prodQ6M4",
  "prodL9V7",
  "prodB2N5",
  "prodH5Y8",
  "prodC1D6",
  "prodE4S3",
  "prodT7J9",
  "prodU0G2",
  "prodI3H5",
  "prodO6L8",
  "prodP9A1",
  "prodS2B4",
  "prodD5C7",
  "prodF8E0",
  "prodG1I3",
  "prodJ4K6",
  "prodK7M9",
  "prodM0O2",
  "prodN3Q5",
  "prodR6T8",
  "prodV9W1",
  "prodY2Z4",
];

// TODO: Schrijf een functie controleerVoorraad(productId) die een Promise retourneert.
// Als het product op voorraad is (gebruik de voorraad array om te checken of een gegeven productId in deze array zit met een array methode),
// resolve de Promise met het bericht "Product is op voorraad".
// Zo niet reject met "Product is niet op voorraad.".
// Gebruik then en catch om het resultaat te verwerken.

// TODO: Test nu uw functie met deze twee aanroepen.
// controleerVoorraad("prodJ4K6");
// controleerVoorraad("prodXGT8");

// 6. Async en await

// Oefening 1:
// Gegeven: /

// TODO: Schrijf een async functie controleerVoorraadAsync die de controleerVoorraad functie gebruikt uit de vorige sectie maak gebruik van async en await.
// Zorg ervoor dat je de Promise correct afhandelt en eventuele fouten opvangt met een try/catch block.

// Oefening 2:
// Gegeven: /

// TODO: Schrijf een functie simuleerVerzending(email) (PROMISE) die na 1 seconde een bericht retourneert dat de e-mail is verzonden naar het opgegeven emailadres.
// Schrijf een async functie verzendEmail(email) gebruik await om te wachten op het resultaat van de simuleerVerzending(email) functie en log het bericht.

// TODO: Test de functie
// verzendEmail("voorbeeld@example.com");
