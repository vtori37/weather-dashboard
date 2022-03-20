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

var dateFive = document.getElementById("dateFiveDay");
var iconFive = document.getElementById("iconFiveDay");
var tempFive = document.getElementById("tempFiveDay");
var windFive = document.getElementById("windFiveDay");
var humidityFive= document.getElementById("humidityFiveDay");


// Date and Time
dateEL.textContent = moment().format("dddd, MMM, DD, YYYY, h:mm a");

// Listens to user clicking the button; sends user input to searchCity
function searchBtn() {
  // preventDefault(); //prevents 
  console.log(getCity);
  console.log(getCity.value);
  var city = getCity.value;
  
  searchCity(city);

}


//function to get API data
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
          console.log(data.list[6]);
          //  console.log(data.list[0].weather[0].icon);
          //  console.log(tempFive.textContent);
         })
 
       // Displaying the data results to their respective html elements
      chosenCityEl.textContent = data.name;
      tempEl.textContent = "Temperature: " + data.main.temp + "°F    " + "Feels like: " + data.main.feels_like + "°";
      tempLoHiEl.textContent = "High/Low: "  + data.main.temp_max + "°" + data.main.temp_min  + "°" ;
      windEl.textContent = "Wind: " + data.wind.speed + "mph";
      humidityEl.textContent = "Humidity: " + data.main.humidity + "%";
            // const icon = `http://openweathermap.org/img/wn/${data.list[0].weather[0].icon || '@2x.png'}`
            // const iconEl= document.getElementById("icon");
            // const html = (` <p><img class="icon" src="${icon}"></p>`)
  
  
            // For loop for five day forecast
      for (var i=1; i < data.dailyLength; i++) {
        var url = `https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}${apiKey}` 
        fetch(url)
        .then(function(response){
          return response.json();
        })
        .then(function(data){
          // console.log(data.list[0].weather[0].icon);
          console.log(data.list);
        })
        
        // console.log(tempFive.textContent);
        // dateFive.textContent = data.name;
        // iconFive.textContent = "Temperature: " + data.main.temp + "°F    " + "Feels like: " + data.main.feels_like + "°";
        //tempFive.textContent = "High/Low: "  + data.main.temp_max + "°" + data.main.temp_min  + "°" ;
        // windFive.textContent = "Wind: " + data.wind.speed + "mph";
        // humidityFive.textContent = "Humidity: " + data.main.humidity + "%";
        // console.log(tempFive.textContent = "High/Low: "  + data.main.temp_max + "°" + data.main.temp_min  + "°";);
       }

      // .catch(function(error){
      //   console.log(error);
      // })

   })  
};


     // five day forecast
// function fiveSearchCity(fiveCity) {    
//   fetch(baseUrl + fiveCity + apiKey)
//   .then(function(response){
//       return response.json();
//   })
//   .then(function(data){
//     //  console.log(data);
//     //  console.log(data);
    
//     var lon = data.coord.lon;
//     var lat = data.coord.lat;

//       var url = `https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}${apiKey}` 
//        fetch(url)
//        .then(function(response){
//          return response.json();
//        })
//        .then(function(data){
//           console.log(data.list.length);

//         })

        // for (var i=0; i < data.length; i++) {

        // // var dataFiveDay = 

        // // // Displaying the data results to their respective html elements
        // // chosenCityEl.textContent = data.name;
        // // tempEl.textContent = "Temperature: " + data.main.temp + "°F    " + "Feels like: " + data.main.feels_like + "°";
        // // tempLoHiEl.textContent = "High/Low: "  + data.main.temp_max + "°" + data.main.temp_min  + "°" ;
        // // windEl.textContent = "Wind: " + data.wind.speed + "mph";
        // // humidityEl.textContent = "Humidity: " + data.main.humidity + "%";
        // } 
        // console.log(data.list[1])
        // console.log(data.list[1].weather[0]


        // .catch(function(error){
        //     console.log(error);
        //   })    
// };
      
    

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
// 
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
