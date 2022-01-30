function currentDate(date) {
  let day = date.getDay();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  ];

  if (hour < 10) {
    hour = `0${hour}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${days[day]}, ${hour}:${minutes}`;
}

function showTemperature(response) {
  //diese Funktion zeigt mir die Temperatur an
  let temperature = Math.round(response.data.main.temp);
  let output = `${temperature}°`;
  let div = document.querySelector("#temperature");
  div.innerHTML = output;
}
//diese Funktion wird beim Abschicken des Formulars aufgerufen und passt den Namen der Stadt an
//danach wird die OpenWeatherApp mit dem Namen der Stadt aufgerufen und das Resultat an die Funktion "show temperature" übergeben:

function citySearch(event) {
  event.preventDefault();
  console.log("citySearch");
  let searchInput = document.querySelector("#search"); // Suchfeld für den Stadtnamen
  let h2 = document.querySelector("#city");
  h2.innerHTML = `${searchInput.value}`;
  let apiKey = "283cd244149df23fe678e55622dff12e";
  let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=metric`;
  console.log(apiURL);
  axios.get(`${apiURL}`).then(showTemperature);
}

//das Formular für die Stadtsuche:
let citySearchForm = document.querySelector("#citySearchForm");

citySearchForm.addEventListener("submit", citySearch);
let date = document.querySelector("#date");
//hier wird das aktuelle Datum angezeigt:
date.innerHTML = currentDate(new Date());

let temperature = document.querySelector("#temperature");
temperature.innerHTML = "25°";
