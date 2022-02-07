var apiKey = "477cb4dfec62891aa400495c3bb9bf5d"
var searchHistory = []
var pastSearch = document.querySelector('.list')

var search = document.getElementById('search-city')
var searchBtn = document.getElementById('search-button')
var current = document.getElementById('current-city')
var temp = document.getElementById('temperature')
var humidity = document.getElementById('humidity')
var windSpeed = document.getElementById('wind-speed')
var uvIndex = document.getElementById('uv-index')
var icon = document.querySelector('.icon')


var temp1 = document.getElementById("temp0")
var humidity1 = document.getElementById('humidity0')
var wind1 = document.getElementById('wind-speed0')
var uv1 = document.getElementById('uv-index0')
var icon0 = document.querySelector('.icon0')

var temp2 = document.getElementById("temp1")
var humidity2 = document.getElementById('humidity1')
var wind2 = document.getElementById('wind-speed1')
var uv2 = document.getElementById('uv-index1')
var icon1 = document.querySelector('.icon1')

var temp3 = document.getElementById("temp2")
var humidity3 = document.getElementById('humidity2')
var wind3 = document.getElementById('wind-speed2')
var uv3 = document.getElementById('uv-index2')
var icon2 = document.querySelector('.icon2')


var temp4 = document.getElementById("temp3")
var humidity4 = document.getElementById('humidity3')
var wind4 = document.getElementById('wind-speed3')
var uv4 = document.getElementById('uv-index3')
var icon3 = document.querySelector('.icon3')

var temp5 = document.getElementById("temp4")
var humidity5 = document.getElementById('humidity4')
var wind5 = document.getElementById('wind-speed4')
var uv5 = document.getElementById('uv-index4')
var icon4 = document.querySelector('.icon4')


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
            icon.src = `http://openweathermap.org/img/w/${data.current.weather[0].icon}.png`
            uvColor(data.current.uvi)
            // Day 1 forecast 

            temp1.textContent = data.daily[0].temp.day + "F"
            humidity1.textContent = data.daily[0].humidity + "%"
            wind1.textContent = data.daily[0].wind_speed + "MPH"
            uv1.textContent = data.daily[0].uvi
            icon0.src = `http://openweathermap.org/img/w/${data.daily[0].weather[0].icon}.png`


            // Day 2 forecast 
            temp2.textContent = data.daily[1].temp.day + "F"
            humidity2.textContent = data.daily[1].humidity + "%"
            wind2.textContent = data.daily[1].wind_speed + "MPH"
            uv2.textContent = data.daily[1].uvi
            icon1.src = `http://openweathermap.org/img/w/${data.daily[1].weather[0].icon}.png`


            // Day 3 forecast 
            temp3.textContent = data.daily[2].temp.day + "F"
            humidity3.textContent = data.daily[2].humidity + "%"
            wind3.textContent = data.daily[2].wind_speed + "MPH"
            uv3.textContent = data.daily[2].uvi
            icon2.src = `http://openweathermap.org/img/w/${data.daily[2].weather[0].icon}.png`


            // Day 4 forecast 
            temp4.textContent = data.daily[3].temp.day + "F"
            humidity4.textContent = data.daily[3].humidity + "%"
            wind4.textContent = data.daily[3].wind_speed + "MPH"
            uv4.textContent = data.daily[3].uvi
            icon3.src = `http://openweathermap.org/img/w/${data.daily[3].weather[0].icon}.png`


            // Day 5 forecast 
            temp5.textContent = data.daily[4].temp.day + "F"
            humidity5.textContent = data.daily[4].humidity + "%"
            wind5.textContent = data.daily[4].wind_speed + "MPH"
            uv5.textContent = data.daily[4].uvi
            icon4.src = `http://openweathermap.org/img/w/${data.daily[4].weather[0].icon}.png`


        })

}

function uvColor(uvi) {
    console.log(uvi)
    if (uvi < 3) {
        uvIndex.style.backgroundColor = "green"
    }
    else if (uvi < 6) {
        uvIndex.style.backgroundColor = "yellow"

    }

    else if (uvi < 8) {
        uvIndex.style.backgroundColor = "orange"
    }

    else if (uvi < 11) {
        uvIndex.style.backgroundColor = "red"
    }

    else {
        uvIndex.style.backgroundColor = "purple"
    }
}



searchBtn.addEventListener("click", function (event) {
    event.preventDefault();
    var searchResults = search.value
    currentWeather(searchResults);
    // searchHistory.unshift(searchResults);
    // localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    // searchList();
    getHistory();
    // btn.classList.remove("uv")
    console.log(searchHistory)
    searchList(search.value)
})


pastSearch.addEventListener("click", function (event) {
    console.log(event)
    if (event.target.textContent !== undefined) {
        currentWeather(event.target.textContent)
    }
})

function searchList(city) {
    var listItem = document.createElement('li')
    listItem.textContent = city
    console.log(searchHistory)
    listItem.classList.add("listItem")
    pastSearch.appendChild(listItem)
}


function getHistory() {
    var history = localStorage.getItem("searchHistory")
    searchHistory = history || [];
    historyEl = document.createElement("button");
    historyEl.textContent = history
}

getHistory();