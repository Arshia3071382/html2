
let citiesData = {
    tehran: {city: 'Tehran', temp: 12, weather: 'Sunny', humidity: 23, windSpeed: 32},
    shiraz: {city: 'Shiraz', temp: 9, weather: 'windy', humidity: 12, windSpeed: 14},
    tabriz: {city: 'Tabriz', temp: 1, weather: 'rainy', humidity: 43, windSpeed: 12},
    mashhad: {city: 'Mashhad', temp: 16, weather: 'snowy', humidity: 7, windSpeed: 24},
    esfahan: {city: 'Esfahan', temp: 23, weather: 'Sunny', humidity: 15, windSpeed: 18},
  }
let searchBox = document.querySelector(".search-bar")
let searchBtn = document.querySelector("#search")


 searchBtn.addEventListener('click', function () {
    let searchValue = searchBox.value
    let mainCitiesData = citiesData[searchValue]

    if(mainCitiesData){
        document.querySelector(".city").innerHTML = mainCitiesData.city
        document.querySelector(".temp").innerHTML = mainCitiesData.temp + "°C"
        document.querySelector(".humidity").innerHTML = mainCitiesData.humidity
        document.querySelector(".description").innerHTML =mainCitiesData.weather
        document.querySelector(".wind").innerHTML = mainCitiesData.windSpeed + "km/h"
        document.querySelector(".weather").classList.remove("loading")
    }else{
        alert("لطفا نام شهر را درست وارد کنید")

    }

 })
     