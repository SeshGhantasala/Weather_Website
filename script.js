const apiKey="2a1b1965f498d08d3e4507a3d1484fe0";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const WeatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
        WeatherIcon.src = "clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        WeatherIcon.src = "clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        WeatherIcon.src = "rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        WeatherIcon.src = "drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        WeatherIcon.src = "mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }

}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})