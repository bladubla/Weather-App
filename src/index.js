let now = new Date();
let currentDate = document.querySelector(".ciudad");
let date = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thurday",
  "Friday",
  "Saturdaty",
];
let day = days[now.getDay()];

let months = [
  "January",
  "Febreuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];
currentDate.innerHTML = `${day}, ${month} ${date}, ${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  let formElement = document.querySelector("#look-city-input");
  let h1 = document.querySelector("h1");
  h1.innerHTML = `📍 ${formElement.value} ⏱`;
  actualLocation(formElement.value);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function actualLocation(position) {
  let unit = "metric";
  let city = document.querySelector("#look-city-input").value;
  let apiKey = "8c78e9e7e9928cd1a2a6f923072c3dec";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;
  axios.get(apiUrl).then(showTemperature);
}
function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let h3 = document.querySelector("h3");
  h3.innerHTML = `${temperature}ºC`;
}
