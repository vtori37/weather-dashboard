var getCity = document.getElementById("userCityInput");
var apiKey = "&appid=f23b6b04e25cca30210187f4912be875&units=imperial";
var baseUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

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
      //  console.log(data.coord);
      
      var lon = data.coord.lon;
      var lat = data.coord.lat;
       var url = `https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}${apiKey}` 
        fetch(url)
        .then(function(response){
          return response.json();
        })
        .then(function(data){
          // console.log(data);
          // console.log(data.list[0]);
        })

        console.log(lon);
        console.log(lat);
    })
    .catch(function(error){
        console.log(error);
      })
      

};

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
