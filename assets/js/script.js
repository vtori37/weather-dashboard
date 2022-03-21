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
var img = document.getElementById("icon");



// Date and Time
dateEL.textContent = moment().format("dddd, MMM, DD, YYYY, h:mm a");

// Listens to user clicking the button; sends user input to searchCity
function searchBtn() {
  // preventDefault(); //prevents 
  // console.log(getCity);
  // console.log(getCity.value);
  var city = getCity.value;
  // var cityFive = getCity.value;
  
  searchCity(city);
  // fiveDayForecast(cityFive);

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
        
        // var lon = data.coord.lon;
        // var lat = data.coord.lat;
  
          var url = `https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}${apiKey}` 
           fetch(url)
           .then(function(response){
             return response.json();
           })
           .then(function(data){
            console.log(data.list[0]);
            //  console.log(data.list[0].weather[0].icon);
             console.log(data.list.length);

             var dateFive2 = document.getElementById("dateFiveDay2");
              // var iconFive = document.getElementById("iconFiveDay");
             var tempLoHiFive2 = document.getElementById("tempLoHiFiveFiveDay2");
             var tempFive2 = document.getElementById("tempFiveDay2");
             var windFive2 = document.getElementById("windFiveDay2");
             var humidityFive2 = document.getElementById("humidityFiveDay2");
             
            var dateFive3 = document.getElementById("dateFiveDay3");
            // var iconFive = document.getElementById("iconFiveDay");
            var tempLoHiFive3 = document.getElementById("tempLoHiFiveFiveDay3");
            var tempFive3 = document.getElementById("tempFiveDay3");
            var windFive3 = document.getElementById("windFiveDay3");
            var humidityFive3 = document.getElementById("humidityFiveDay3");
                
            var dateFive4 = document.getElementById("dateFiveDay4");
              // var iconFive = document.getElementById("iconFiveDay");
            var tempLoHiFive4 = document.getElementById("tempLoHiFiveFiveDay4");
            var tempFive4 = document.getElementById("tempFiveDay4");
            var windFive4 = document.getElementById("windFiveDay4");
            var humidityFive4 = document.getElementById("humidityFiveDay4");

            var dateFive5 = document.getElementById("dateFiveDay5");
            // var iconFive = document.getElementById("iconFiveDay");
            var tempLoHiFive5 = document.getElementById("tempLoHiFiveFiveDay5");
            var tempFive5 = document.getElementById("tempFiveDay5");
            var windFive5 = document.getElementById("windFiveDay5");
            var humidityFive5 = document.getElementById("humidityFiveDay5");
                
            var dateFive6 = document.getElementById("dateFiveDay6");
              // var iconFive = document.getElementById("iconFiveDay");
            var tempLoHiFive6 = document.getElementById("tempLoHiFiveFiveDay6");
            var tempFive6 = document.getElementById("tempFiveDay6");
            var windFive6 = document.getElementById("windFiveDay6");
            var humidityFive6 = document.getElementById("humidityFiveDay6");
           
              for (var i = 0; i < data.list.length; i++) {  
               tempFive2.textContent = "Temperature: " + data.list[i].main.temp + "Feels like: " + data.list[i].main.feels_like + "°";
               tempLoHiFive2.textContent = "High/Low: "  + data.list[i].main.temp_max + "°" + data.list[i].main.temp_min  + "°" ;
               windFive2.textContent = "Wind: " + data.list[i].wind.speed + "mph";
               humidityFive2.textContent = "Humidity: " + data.list[i].main.humidity + "%";
               console.log(data.list[i].main.temp);

               tempFive3.textContent = "Temperature: " + data.list[i].main.temp + "Feels like: " + data.list[i].main.feels_like + "°";
               tempLoHiFive3.textContent = "High/Low: "  + data.list[i].main.temp_max + "°" + data.list[i].main.temp_min  + "°" ;
               windFive3.textContent = "Wind: " + data.list[i].wind.speed + "mph";
               humidityFive3.textContent = "Humidity: " + data.list[i].main.humidity + "%";
               console.log(data.list[i].main.temp);

               tempFive4.textContent = "Temperature: " + data.list[i].main.temp + "Feels like: " + data.list[i].main.feels_like + "°";
               tempLoHiFive4.textContent = "High/Low: "  + data.list[i].main.temp_max + "°" + data.list[i].main.temp_min  + "°" ;
               windFive4.textContent = "Wind: " + data.list[i].wind.speed + "mph";
               humidityFive4.textContent = "Humidity: " + data.list[i].main.humidity + "%";
               console.log(data.list[i].main.temp);

               tempFive5.textContent = "Temperature: " + data.list[i].main.temp + "Feels like: " + data.list[i].main.feels_like + "°";
               tempLoHiFive5.textContent = "High/Low: "  + data.list[i].main.temp_max + "°" + data.list[i].main.temp_min  + "°" ;
               windFive5.textContent = "Wind: " + data.list[i].wind.speed + "mph";
               humidityFive5.textContent = "Humidity: " + data.list[i].main.humidity + "%";
               console.log(data.list[i].main.temp);

               tempFive6.textContent = "Temperature: " + data.list[i].main.temp + "Feels like: " + data.list[i].main.feels_like + "°";
               tempLoHiFive6.textContent = "High/Low: "  + data.list[i].main.temp_max + "°" + data.list[i].main.temp_min  + "°" ;
               windFive6.textContent = "Wind: " + data.list[i].wind.speed + "mph";
               humidityFive6.textContent = "Humidity: " + data.list[i].main.humidity + "%";
               console.log(data.list[i].main.temp);
              };
            })
   
         // Displaying the data results to their respective html elements
      
        chosenCityEl.textContent = data.name;
        tempEl.textContent = "Temperature: " + data.main.temp + "°F    " + "Feels like: " + data.main.feels_like + "°";
        tempLoHiEl.textContent = "High/Low: "  + data.main.temp_max + "°" + data.main.temp_min  + "°" ;
        windEl.textContent = "Wind: " + data.wind.speed + "mph";
        humidityEl.textContent = "Humidity: " + data.main.humidity + "%";
        uvEl.textContent ="UVIndex:"; //placeholder
       


        // iconUpload.onload = function () {
        //   icon.src =  this.src;
        // };
        //   var icon = document.getElementById('icon').src = `http://openweathermap.org/img/w/${data.list[1].list[0].weather[0].icon}.png`;
        // const icon = document.images(`http://openweathermap.org/img/wn/${data.list[0].weather[0].icon || '@2x.png'}`);
       
        // for (var i=0; i < 6; i++) {
        //   console.log(data.list.[1].);
        // }
      })
    
  
        .catch(function(error){
          console.log(error);
        })     

  
            // For loop for five day forecast
  // for (var i=1; i < data.dailyLength; i++) {
  
  //     dateFive.textContent = data.name;
  //     iconFive.textContent = "Temperature: " + data.main.temp + "°F    " + "Feels like: " + data.main.feels_like + "°";
  //     tempFive.textContent = "High/Low: "  + data.main.temp_max + "°" + data.main.temp_min  + "°" ;
  //     windFive.textContent = "Wind: " + data.wind.speed + "mph";
  //     humidityFive.textContent = "Humidity: " + data.main.humidity + "%";
  //     console.log(tempFive.textContent);
    

  //   // .catch(function(error){
  //   //   console.log(error);
  //   // })
  // };
};


// function fiveDayForecast(cityFive) {
//  // For loop for five day forecast
//   fetch(baseUrl + cityFive + apiKey)
//     .then(function(response){
//         return response.json();
//     })
//     .then(function(data){
//       //  console.log(data);
      
//         var url = `https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}${apiKey}` 
//          fetch(url)
//          .then(function(response){
//            return response.json();
//          })
//          .then(function(data){
//           console.log(data.list[0]);
//           //  console.log(data.list[0].weather[0].icon);
//            console.log(data.list[2].clouds);
          
 
//     //    // For loop for five day forecast
//     // for (var i=1; i < data.dailyLength; i++) {
//       // var dateFive = document.getElementById("dateFiveDay");
//       // var iconFive = document.getElementById("iconFiveDay");
//       // var tempFive = document.getElementById("tempFiveDay");
//       // var windFive = document.getElementById("windFiveDay");
//       // var humidityFive = document.getElementById("humidityFiveDay");
      
//       var dateFive = document.getElementById("dateFiveDay1");
//       var iconFive = document.getElementById("iconFiveDay");
//       var tempFive = document.getElementById("tempFiveDay");
//       var windFive = document.getElementById("windFiveDay");
//       var humidityFive = document.getElementById("humidityFiveDay");
    
//       for (var i=0; i < data.list[i].length; i++) {  
//         // var dateFive = document.getElementById("dateFiveDay");
//         // var iconFive = document.getElementById("iconFiveDay");
//         // var tempFive = document.getElementById("tempFiveDay");
//         // var windFive = document.getElementById("windFiveDay");
//         // var humidityFive = document.getElementById("humidityFiveDay");
//         dateFive.textContent = data.name;
//         iconFive.textContent = "Temperature: " + data.main.temp + "°F    " + "Feels like: " + data.main.feels_like + "°";
//         tempFive.textContent = "High/Low: "  + data.main.temp_max + "°" + data.main.temp_min  + "°" ;
//         windFive.textContent = "Wind: " + data.wind.speed + "mph";
//         humidityFive.textContent = "Humidity: " + data.main.humidity + "%";
//         console.log(data.main.temp);
//       };


//     })
//       // var uvIndexFive = document.getElementsByClassName(".uvIndexFiveDay")          
//     }) 

//       .catch(function(error){
//         console.log(error);
//       })     


          
// };

// // var searchHistory 
// // var searchHistory
 
// // var weather API url and weather api key
// // var = document query seletor

// // var document query selector for city-buttons

// // var weather api url and key for timezones 
// // timezone plugins for day.js   api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
// // use fetch to grab stuff in api

// // function to render search history 
// // var for document query selector 
// // do a lil for loop
// //  innner html for search history 
// // for loop will have search.history -1 (for length of history)


// // var searchBtn() { 
// //   fetch(apiUrlKey).then(function(data) {
// // set attributes to searchBtn add event listener
// // 

// // function to update local storage history 
// // use json to stringify to later get the values


// // get weather
// // varfetch

// // getcity location
// // varurl
// // fetch



// // uv color codes

// // document.querySelector(#)





// /* https://openweathermap.org/current
// https://openweathermap.org/forecast5
// https://openweathermap.org/api/geocoding-api#direct_name
// https://openweathermap.org/api/geocoding-api#direct  
// https://developer.mozilla.org/en-US/docs/Web/API/Response/ok
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_api_fetch */
