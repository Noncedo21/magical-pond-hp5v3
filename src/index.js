function currentTimePlace(event) {
  event.preventDefault();

  let h1 = document.querySelector("h1");
  let city = document.querySelector("#city-search").value;
  h1.innerHTML = city;

  let apiKey = "cca34be40btf00a3b62f839750cc64eo";

  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(displayWeather);
}

let searchForm = document.querySelector("form");
searchForm.addEventListener("submit", currentTimePlace);
let now = new Date();
let cTime = document.querySelector("#current-time");
let cDate = document.querySelector("#current-date");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let timeHours = now.getHours();
let timeMin = now.getMinutes();
timeMin = timeMin < 10 ? `0${timeMin}` : timeMin;
cDate.innerHTML = day;
cTime.innerHTML = ` ${timeHours}:${timeMin}`;

//WEEK 5

function displayWeather(response) {
  let tempDegrees = document.querySelector(".degree");
  let temperature = Math.round(response.data.temperature.current);
  tempDegrees.innerHTML = temperature;
}
