var weatherCard = document.getElementById('weather');
var weatherCard2 = document.getElementById('currentWeather');
var city = document.getElementById('citySearch').value;
var getResult = document.getElementById('cityButton');
var lastSearch = document.getElementById('last');
var current1 = document.getElementById('current');
var day1 = document.getElementById('day1');
var day2 = document.getElementById('day2');
var day3 = document.getElementById('day3');
var day4 = document.getElementById('day4');
var day5 = document.getElementById('day5');


var formSubmitHandler = function (event) {
  event.preventDefault();

  var city = citySearch.value.trim();

  if (city) {
    getWeatherForecast(city);
    cityInput.value = '';
  }
}

// Function generating current weather.
function getApi() {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + citySearch.value +'&appid=2bd3abed1cabfacf19025ec224af21db&units=imperial';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // Use the console to examine the response
        console.log(data);
        console.log(data.main.temp);
        console.log(data.dt_txt);
        console.log(data.weather[0].description);
        console.log(data.main.humidity);
        console.log(data.wind.speed);

        var current0 = document.createElement('h3');
        var icon0 = document.createElement('img');
        var temp0 = document.createElement('li');
        var condition0 = document.createElement('li');
        var humidity0 = document.createElement('li');
        var windSpeed0 = document.createElement('li');

        current0.textContent = data.name + ' Current' ;
        icon0.src = 'https://openweathermap.org/img/w/' + data.weather[0].icon + '.png';
        humidity0.textContent = 'Humidity: ' + data.main.humidity + '%';
        temp0.textContent = 'Current Temp: ' + data.main.temp + ' F';
        condition0.textContent = 'Conditions: ' + data.weather[0].description;
        windSpeed0.textContent = 'Wind Speed: ' + data.wind.speed;

        current1.append(current0);
        current1.append(icon0);
        current1.append(temp0);
        current1.append(condition0);
        current1.append(humidity0);
        current1.append(windSpeed0);
          
      });
  }

// function generating 5 day forecast.
function getApi1() {
    var requestUrl1 = 'https://api.openweathermap.org/data/2.5/forecast?q=' + citySearch.value + '&appid=2bd3abed1cabfacf19025ec224af21db&units=imperial';
  
    fetch(requestUrl1)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // Use the console to examine the response
        console.log(data);
        console.log(data.list[0].main.temp);
        console.log(data.list[0].dt_txt);
        console.log(data.list[0].weather[0].description);
        console.log(data.list[0].main.humidity);
        console.log(data.list[0].wind.speed);
        // day1
        var icon1 = document.createElement('img');
        var temp1 = document.createElement('li');
        var time1 = document.createElement('h3');
        var condition1 = document.createElement('li');
        var humidity1 = document.createElement('li');
        var windSpeed1 = document.createElement('li');

        icon1.src = 'https://openweathermap.org/img/w/' + data.list[6].weather[0].icon + '.png';
        humidity1.textContent = 'Humidity: ' + data.list[6].main.humidity + '%';
        temp1.textContent = 'Temp: ' + data.list[6].main.temp + ' F';
        condition1.textContent = 'Conditions: ' + data.list[6].weather[0].description;
        time1.textContent = 'Local Time: ' + data.list[6].dt_txt;
        windSpeed1.textContent = 'Wind Speed: ' + data.list[6].wind.speed;

        day1.append(time1);
        day1.append(icon1);
        day1.append(temp1);
        day1.append(condition1);
        day1.append(humidity1);
        day1.append(windSpeed1);
        
        // day 2
        var icon2 = document.createElement('img');
        var temp2 = document.createElement('li');
        var time2 = document.createElement('h3');
        var condition2 = document.createElement('li');
        var humidity2 = document.createElement('li');
        var windSpeed2 = document.createElement('li');

        icon2.src = 'https://openweathermap.org/img/w/' + data.list[14].weather[0].icon + '.png';
        humidity2.textContent = 'Humidity: ' + data.list[14].main.humidity + '%';
        temp2.textContent = 'Temp: ' + data.list[14].main.temp + ' F';
        condition2.textContent = 'Conditions: ' + data.list[14].weather[0].description;
        time2.textContent = 'Local Time: ' + data.list[14].dt_txt;
        windSpeed2.textContent = 'Wind Speed: ' + data.list[14].wind.speed;

        day2.append(time2);
        day2.append(icon2);
        day2.append(temp2);
        day2.append(condition2);
        day2.append(humidity2);
        day2.append(windSpeed2);

        // day 3
        var icon3 = document.createElement('img');
        var temp3 = document.createElement('li');
        var time3 = document.createElement('h3');
        var condition3 = document.createElement('li');
        var humidity3 = document.createElement('li');
        var windSpeed3 = document.createElement('li');

        icon3.src = 'https://openweathermap.org/img/w/' + data.list[22].weather[0].icon + '.png';
        humidity3.textContent = 'Humidity: ' + data.list[22].main.humidity + '%';
        temp3.textContent = 'Temp: ' + data.list[22].main.temp + ' F';
        condition3.textContent = 'Conditions: ' + data.list[22].weather[0].description;
        time3.textContent = 'Local Time: ' + data.list[22].dt_txt;
        windSpeed3.textContent = 'Wind Speed: ' + data.list[22].wind.speed;

        day3.append(time3);
        day3.append(icon3);
        day3.append(temp3);
        day3.append(condition3);
        day3.append(humidity3);
        day3.append(windSpeed3);
    
        // day 4
        var icon4 = document.createElement('img');
        var temp4 = document.createElement('li');
        var time4 = document.createElement('h3');
        var condition4 = document.createElement('li');
        var humidity4 = document.createElement('li');
        var windSpeed4 = document.createElement('li');

        icon4.src = 'https://openweathermap.org/img/w/' + data.list[30].weather[0].icon + '.png';
        humidity4.textContent = 'Humidity: ' + data.list[30].main.humidity + '%';
        temp4.textContent = 'Temp: ' + data.list[30].main.temp + ' F';
        condition4.textContent = 'Conditions: ' + data.list[30].weather[0].description;
        time4.textContent = 'Local Time: ' + data.list[30].dt_txt;
        windSpeed4.textContent = 'Wind Speed: ' + data.list[30].wind.speed;

        day4.append(time4);
        day4.append(icon4);
        day4.append(temp4);
        day4.append(condition4);
        day4.append(humidity4);
        day4.append(windSpeed4);

        // day 5
        var icon5 = document.createElement('img');
        var temp5 = document.createElement('li');
        var time5 = document.createElement('h3');
        var condition5 = document.createElement('li');
        var humidity5 = document.createElement('li');
        var windSpeed5 = document.createElement('li');

        icon5.src = 'https://openweathermap.org/img/w/' + data.list[38].weather[0].icon + '.png';
        humidity5.textContent = 'Humidity: ' + data.list[38].main.humidity + '%';
        temp5.textContent = 'Temp: ' + data.list[38].main.temp + ' F';
        condition5.textContent = 'Conditions: ' + data.list[38].weather[0].description;
        time5.textContent = 'Local Time: ' + data.list[38].dt_txt;
        windSpeed5.textContent = 'Wind Speed: ' + data.list[38].wind.speed;

        day5.append(time5);
        day5.append(icon5);
        day5.append(temp5);
        day5.append(condition5);
        day5.append(humidity5);
        day5.append(windSpeed5);

      });
  }

getResult.addEventListener('click', getApi);
getResult.addEventListener('click', getApi1);
