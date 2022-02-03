var apiKey = "477cb4dfec62891aa400495c3bb9bf5d"
var searchHistory = []

var search = document.getElementById('search-city')
var searchBtn = document.getElementById('search-button')
var current = document.getElementById('current-city')
var temp = document.getElementById('temperature')
var humidity = document.getElementById('humidity')
var windSpeed = document.getElementById('wind-speed')
var uvIndex = document.getElementById('uv-index')

var temp1 = document.getElementById("temp0")
var humidity1 = document.getElementById('humidity0')
var wind1 = document.getElementById('wind-speed0')
var uv1 = document.getElementById('uv-index0')

var temp2 = document.getElementById("temp1")
var humidity2 = document.getElementById('humidity1')
var wind2 = document.getElementById('wind-speed1')
var uv2 = document.getElementById('uv-index1')

var temp3 = document.getElementById("temp2")
var humidity3 = document.getElementById('humidity2')
var wind3 = document.getElementById('wind-speed2')
var uv3 = document.getElementById('uv-index2')

var temp4 = document.getElementById("temp3")
var humidity4 = document.getElementById('humidity3')
var wind4 = document.getElementById('wind-speed3')
var uv4 = document.getElementById('uv-index3')

var temp5 = document.getElementById("temp4")
var humidity5 = document.getElementById('humidity4')
var wind5 = document.getElementById('wind-speed4')
var uv5 = document.getElementById('uv-index4')

function currentWeather(city) {
    //var currentWeatherUrl ="https://api.openweathermap.org/data/2.5/weather?q={cityname}&appid=" + apiKey
    var currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    current.textContent = city
    fetch(currentWeatherUrl)
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            // console.log(data)
            oneCall(data.coord.lat, data.coord.lon)
        })

}

function oneCall(lat, lon) {
    var oneCallUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`
    fetch(oneCallUrl)
        .then(function (res) {
            return res.json()
        })
        .then(function (data) {
            console.log(data)
            temp.textContent = data.current.temp + "F"
            humidity.textContent = data.current.humidity + "%"
            windSpeed.textContent = data.current.wind_speed + "MPH"
            uvIndex.textContent = data.current.uvi
            // Day 1 forecast 

            temp1.textContent = data.daily[0].temp.day + "F"
            humidity1.textContent = data.daily[0].humidity + "%"
            wind1.textContent = data.daily[0].wind_speed + "MPH"
            uv1.textContent = data.daily[0].uvi

            // Day 2 forecast 
            temp2.textContent = data.daily[1].temp.day + "F"
            humidity2.textContent = data.daily[1].humidity + "%"
            wind2.textContent = data.daily[1].wind_speed + "MPH"
            uv2.textContent = data.daily[1].uvi

            // Day 3 forecast 
            temp3.textContent = data.daily[2].temp.day + "F"
            humidity3.textContent = data.daily[2].humidity + "%"
            wind3.textContent = data.daily[2].wind_speed + "MPH"
            uv3.textContent = data.daily[2].uvi

            // Day 4 forecast 
            temp4.textContent = data.daily[3].temp.day + "F"
            humidity4.textContent = data.daily[3].humidity + "%"
            wind4.textContent = data.daily[3].wind_speed + "MPH"
            uv4.textContent = data.daily[3].uvi

            // Day 5 forecast 
            temp5.textContent = data.daily[4].temp.day + "F"
            humidity5.textContent = data.daily[4].humidity + "%"
            wind5.textContent = data.daily[4].wind_speed + "MPH"
            uv5.textContent = data.daily[4].uvi

        })

}





searchBtn.addEventListener("click", function () {
    var searchResults = search.value
    currentWeather(searchResults)
    searchHistory.push(searchResults)
    localStorage.setItem('searchHistory' , searchHistory)
    searchList();
    // btn.classList.remove("uv")
})


function searchList() { 
    var pastSearch = document.getElementsByClassName('list')
    console.log(searchHistory)
    //add loop to create list 
}

searchList();

function getHistory(){
    var history = localStorage.getItem("searchHistory")
    searchHistory = history || [];
}

getHistory();