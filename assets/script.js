var weatherCard = document.getElementById('weather');
var city = document.getElementById('citySearch').value;
var getResult = document.getElementById('cityButton');
var lastSearch = document.getElementById('last');
var day1 = document.getElementById('day1');
// var day2 = document.getElementById('day2');
// var day3 = document.getElementById('day3');
// var day4 = document.getElementById('day4');
// var day5 = document.getElementById('day5');

// var last = localStorage.getItem('city');
// lastSearch.textContent = last;

// function getValue() {
//     var city = document.getElementById('citySearch').value;
//     console.log(city);
//     localStorage.setItem('city', last);
// }

function getApi() {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=Denver&appid=2bd3abed1cabfacf19025ec224af21db&units=imperial';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        // Use the console to examine the response
        console.log(data);
        // TODO: Loop through the data and generate your HTML
        for (var i = 0; i < data.length; i++) {
          var temp1 = document.createElement('h2');
          var time = document.createElement('p');
          temp1.textContent = data.temp;
          time.textContent = data[i].list.dt_text;
          day1.append(temp1);
          day1.append(time);
          
        }
      });
  }

// getResult.addEventListener('click', getValue);
getResult.addEventListener('click', getApi);