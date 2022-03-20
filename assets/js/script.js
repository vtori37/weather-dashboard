var getCity = document.getElementById("userCityInput");
var apiKey = "&appid=f23b6b04e25cca30210187f4912be875&units=imperial";
var baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";
var chosenCityEl= document.getElementById("chosenCity");
var dateEL = document.getElementById("date");
var tempEl= document.getElementById("temp");
var tempLoHiEl= document.getElementById("tempLoHi");
var windEl= document.getElementById("wind");
var humidityEl= document.getElementById("humidity");
var uvEl= document.getElementById("uvIndex");
var iconEl = document.getElementById("icon");

// Date and Time
dateEL.textContent = moment().format("dddd, MMM, DD, YYYY, h:mm a");

//listens to user clicking the button; sends user input to searchCity
function searchBtn() {
  // preventDefault(); //prevents 
  console.log(getCity);
  console.log(getCity.value);
  var city = getCity.value;
  
  searchCity(city);
}

//function to get api data
function searchCity(city) {
 
  fetch(baseUrl + city + apiKey)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
      //  console.log(data);
      //  console.log(data);
      
      var lon = data.coord.lon;
      var lat = data.coord.lat;

        var url = `https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}${apiKey}` 
         fetch(url)
         .then(function(response){
           return response.json();
         })
         .then(function(data){
           console.log(data.list[0].weather[0].icon);
          //  console.log(data.list[0].weather.icon)
          //  console.log(lat);
         })
 
       
      chosenCityEl.textContent = data.name;
      tempEl.textContent = "Temperature: " + data.main.temp + "°F " + "Feels like: " + data.main.feels_like + "°";
      tempLoHiEl.textContent = "High/Low: "  + data.main.temp_max + "°" + data.main.temp_min  + "°" ;
      windEl.textContent = "Wind: " + data.wind.speed + "mph";
      humidityEl.textContent = "Humidity: " + data.main.humidity + "%";

    }) 
      .catch(function(error){
        console.log(error);
      })
    };


// //function to get api data
// function searchCity(city) {
 
//   fetch(baseUrl + city + apiKey)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(data){
//       //  console.log(data);
//        console.log(data);
      
//       var lon = data.coord.lon;
//       var lat = data.coord.lat;

//       // chosenCityEl.textContent = data.name;
//       // tempEl.textContent = "Temperature: " + data.main.temp + "°F " + "Feels like: " + data.main.feels_like + "°";
//       // tempLoHiEl.textContent = "High/Low: "  + data.main.temp_max + "°" + data.main.temp_min  + "°" ;
//       // windEl.textContent = "Wind: " + data.wind.speed + "mph";
//       // humidityEl.textContent = "Humidity: " + data.main.humidiy + "%";
//       // uvEl.textContent = "UV Index:" + data.hourly.uvi + "nm";

//     }) 
//       .catch(function(error){
//         console.log(error);
//       })
//     };
// function fiveSearchCity(city) {    

//        var url = `https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}${apiKey}` 
//         fetch(url)
//         .then(function(response){
//           return response.json();
//         })
//         .then(function(data){
//           var lonFive = data.coord.lon;
//           var latFive = data.coord.lat;
//           console.log(data.list[0]);
//           console.log(lat);
//         })

//     .catch(function(error){
//         console.log(error);
//       })
      

// };

//do if statements in search button and to make sure responses are ok



// var searchHistory 
// var searchHistory
 
// var weather API url and weather api key
// var = document query seletor

// var document query selector for city-buttons

// var weather api url and key for timezones 
// timezone plugins for day.js   api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
// use fetch to grab stuff in api

// function to render search history 
// var for document query selector 
// do a lil for loop
//  innner html for search history 
// for loop will have search.history -1 (for length of history)


// var searchBtn() { 
//   fetch(apiUrlKey).then(function(data) {
// set attributes to searchBtn add event listener
// 

// function to update local storage history 
// use json to stringify to later get the values


// get weather
// varfetch

// getcity location
// varurl
// fetch



// uv color codes

// document.querySelector(#)





/* https://openweathermap.org/current
https://openweathermap.org/forecast5
https://openweathermap.org/api/geocoding-api#direct_name
https://openweathermap.org/api/geocoding-api#direct  
https://developer.mozilla.org/en-US/docs/Web/API/Response/ok
https://www.w3schools.com/js/tryit.asp?filename=tryjs_api_fetch */
