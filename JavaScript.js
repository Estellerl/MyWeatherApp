let currentdateTime = new Date();
function formatDate(date) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  let hour = date.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }

  let min = date.getMinutes();
  if (min < 10) {
    min = `0${min}`;
  }
  let today = `${day} ${hour}:${min}`;
  return today;
}

let aujourdhuit = document.querySelector("#currentDate");

aujourdhuit.innerHTML = formatDate(currentdateTime);
//function search(event) {event.preventDefault();let searchInput = document.querySelector("#citySearch");let city = document.querySelector("#city");city.innerHTML = `${searchInput.value}`;}
//let form = document.querySelector("#difCity");form.addEventListener("submit", search);
//function changeTemptoC(event) {event.preventDefault();let celcius = document.querySelector("#degreesTemparature");celcius.innerHTML = `12°`;}
//function changeTemptoF(event) {event.preventDefault();let farenhite = document.querySelector("#degreesTemparature");farenhite.innerHTML = `54°`;}
//let farenhite = document.querySelector("#degreesFarenhite")farenhite.addEventListener("click", changeTemptoF);
//let celcius = document.querySelector("#degreesCelcius");celcius.addEventListener("click", changeTemptoC);

//Week 5 HW
// function for showing weather (☑️)

function currentWeather(response) {
  console.log(response.data);
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#degreesTemparature").innerHTML = Math.round(
    response.data.main.temp
  );

  //(☑️)
  document.querySelector("#hum").innerHTML = Math.round(
    response.data.main.humidity
  );

  document.querySelector("#win").innerHTML = Math.round(
    response.data.wind.speed
  );

  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
}

//Function for (❌)
function searchCity(town) {
  let apiKey = "b9dcade6ea8b84ffbd9565650e525892";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(currentWeather);
}

// function for searching (❌)
function enterSearch(event) {
  event.preventDefault();
  let town = document.querySelector("#citySearch").value;
  searchCity(town);
}
//fucntion for finding the currentlocation (☑️)
function searchLocation(position) {
  let apiKey = "b9dcade6ea8b84ffbd9565650e525892";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(currentWeather);
}

//function for geolocation(☑️)

function getLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let form = document.querySelector("#difCity");
form.addEventListener("submit", enterSearch);

let currentLocation = document.querySelector("#currentLoc");
currentLocation.addEventListener("click", getLocation);

searchCity("Bordeaux");
