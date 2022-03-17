console.log("what it doooo");

function searchBtn() {
  var city = ""
  var apiUrlKey= "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid" + apiKey;
  fetch(apiUrlKey).then(function(data) {
  
  });
}


// get weather
// varfetch

// getcity location
// varurl
// fetch


// uv color codes

/* https://openweathermap.org/current
https://openweathermap.org/forecast5
https://openweathermap.org/api/geocoding-api#direct_name
https://openweathermap.org/api/geocoding-api#direct  
https://developer.mozilla.org/en-US/docs/Web/API/Response/ok
https://www.w3schools.com/js/tryit.asp?filename=tryjs_api_fetch */