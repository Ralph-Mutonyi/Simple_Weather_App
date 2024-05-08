// Add api key and url
const apikey = "";
const apiUrl = "";

// define search Box and button variables

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
    // Declare Variable -> response to fetch the apiurl and apikey
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    // data inform of json.

    // check response
    if (response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();

    console.log(data);

    // Select the HTML elements and update its data

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c"; // math.round to round off the temperature.
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/hr";

    // update image according to weather condition

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if (data.weather[0].main == "Mist"){
        weatherIcon.stc = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
    
}


searchBtn.addEventListener("click", ()=> {
    // call the checkweather async function
    checkWeather(searchBox.value); 
    
})
