//connection string to get the json data
var franklinRequest = new XMLHttpRequest();
var requestAPI = 'https://api.openweathermap.org/data/2.5/weather?id=4156210&units=imperial&APPID=55cd57b5201bfb25f0475b96f921e761';
franklinRequest.open('GET', requestAPI, true);
franklinRequest.send();

franklinRequest.onload = function() {
  let weatherData = JSON.parse(franklinRequest.responseText);
  console.log(weatherData);
  console.log(weatherData.weather[0].description);
  document.getElementById("Franklintemp").innerHTML = Math.round(weatherData.main.temp);
  document.getElementById("Franklinhomecond").innerHTML = weatherData.weather[0].description;
  document.getElementById("Franklinhumidity").innerHTML = weatherData.main.humidity;
  let wdir = Number(weatherData.wind.deg);
  let winddir="N";
  if (wdir >= 0 && wdir < 22.5) {
      winddir = "N";
  } else if (wdir >= 22.5 && wdir < 67.5) {
      winddir = "NE";
  } else if (wdir >= 67.5 && wdir < 112.5) {
    winddir = "E";
  } else if (wdir >= 112.5 && wdir < 157.5) {
    winddir = "SE";
  } else if (wdir >= 157.5 && wdir < 202.5) {
    winddir = "S";
  } else if (wdir >= 202.5 && wdir < 277.5) {
    winddir = "SW";
  } else if (wdir >= 277.5 && wdir < 292.5) {
    winddir = "W";
  } else if (wdir >= 292.5 && wdir < 337.5) {
    winddir = "NW";
  } else if (wdir >= 337.5 && wdir < 360) {
    winddir = "N";
  }
  var temp = document.getElementById("Franklintemp").innerHTML;
  var wspeed = document.getElementById("Franklinwind").innerHTML;
  var wctemp = 35.74 + (0.6215 * Number(temp)) - (35.75 * (Math.pow(Number(wspeed), 0.16))) + ((0.4275 * Number(temp)) * Math.pow(Number(wspeed), 0.16));
  document.getElementById("Franklinwchill").innerHTML = Math.round(wctemp);
  document.getElementById("Franklinwinddir").innerHTML = winddir;
  document.getElementById("Franklinwind").innerHTML = Math.round(Number(weatherData.wind.speed));
  let imagesrc = "http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
  document.getElementById("Franklinweatherimage").src= imagesrc;
};

var greensvilleRequest = new XMLHttpRequest();
var requestAPI = 'https://api.openweathermap.org/data/2.5/weather?id=4148411&units=imperial&APPID=55cd57b5201bfb25f0475b96f921e761';
greensvilleRequest.open('GET', requestAPI, true);
greensvilleRequest.send();

greensvilleRequest.onload = function() {
  let weatherData = JSON.parse(greensvilleRequest.responseText);
  console.log(weatherData);
  document.getElementById("Greensvilletemp").innerHTML = Math.round(weatherData.main.temp);
  document.getElementById("Greensvillehomecond").innerHTML = weatherData.weather[0].description;
  document.getElementById("Greensvillehumidity").innerHTML = weatherData.main.humidity;
  let wdir = Number(weatherData.wind.deg);
  let winddir="N";
  if (wdir >= 0 && wdir < 22.5) {
    winddir = "N";
  } else if (wdir >= 22.5 && wdir < 67.5) {
    winddir = "NE";
  } else if (wdir >= 67.5 && wdir < 112.5) {
    winddir = "E";
  } else if (wdir >= 112.5 && wdir < 157.5) {
    winddir = "SE";
  } else if (wdir >= 157.5 && wdir < 202.5) {
    winddir = "S";
  } else if (wdir >= 202.5 && wdir < 277.5) {
    winddir = "SW";
  } else if (wdir >= 277.5 && wdir < 292.5) {
    winddir = "W";
  } else if (wdir >= 292.5 && wdir < 337.5) {
    winddir = "NW";
  } else if (wdir >= 337.5 && wdir < 360) {
    winddir = "N";
  }
  var temp = document.getElementById("Greensvilletemp").innerHTML;
  var wspeed = document.getElementById("Greensvillewind").innerHTML;
  var wctemp = 35.74 + (0.6215 * Number(temp)) - (35.75 * (Math.pow(Number(wspeed), 0.16))) + ((0.4275 * Number(temp)) * Math.pow(Number(wspeed), 0.16));
  document.getElementById("Greensvillewchill").innerHTML = Math.round(wctemp);
  document.getElementById("Greensvillewinddir").innerHTML = winddir;
  document.getElementById("Greensvillewind").innerHTML = Math.round(Number(weatherData.wind.speed));
  let imagesrc = "http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
  document.getElementById("Greensvilleweatherimage").src= imagesrc;
};

var springfieldRequest = new XMLHttpRequest();
var requestAPI = 'https://api.openweathermap.org/data/2.5/weather?id=4887398&units=imperial&APPID=55cd57b5201bfb25f0475b96f921e761';
springfieldRequest.open('GET', requestAPI, true);
springfieldRequest.send();

springfieldRequest.onload = function() {
  let weatherData = JSON.parse(springfieldRequest.responseText);
  console.log(weatherData);
  document.getElementById("Springfieldtemp").innerHTML = Math.round(weatherData.main.temp);
  document.getElementById("Springfieldhomecond").innerHTML = weatherData.weather[0].description;
  document.getElementById("Springfieldhumidity").innerHTML = weatherData.main.humidity;
  let wdir = Number(weatherData.wind.deg);
  let winddir="N";
  if (wdir >= 0 && wdir < 22.5) {
    winddir = "N";
  } else if (wdir >= 22.5 && wdir < 67.5) {
    winddir = "NE";
  } else if (wdir >= 67.5 && wdir < 112.5) {
    winddir = "E";
  } else if (wdir >= 112.5 && wdir < 157.5) {
    winddir = "SE";
  } else if (wdir >= 157.5 && wdir < 202.5) {
    winddir = "S";
  } else if (wdir >= 202.5 && wdir < 277.5) {
    winddir = "SW";
  } else if (wdir >= 277.5 && wdir < 292.5) {
    winddir = "W";
  } else if (wdir >= 292.5 && wdir < 337.5) {
    winddir = "NW";
  } else if (wdir >= 337.5 && wdir < 360) {
    winddir = "N";
  }
  var temp = document.getElementById("Springfieldtemp").innerHTML;
  var wspeed = document.getElementById("Springfieldwind").innerHTML;
  var wctemp = 35.74 + (0.6215 * Number(temp)) - (35.75 * (Math.pow(Number(wspeed), 0.16))) + ((0.4275 * Number(temp)) * Math.pow(Number(wspeed), 0.16));
  document.getElementById("Springfieldwchill").innerHTML = Math.round(wctemp);
  document.getElementById("Springfieldwinddir").innerHTML = winddir;
  document.getElementById("Springfieldwind").innerHTML = Math.round(Number(weatherData.wind.speed));
  let imagesrc = "http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
  document.getElementById("Springfieldweatherimage").src= imagesrc;
};
