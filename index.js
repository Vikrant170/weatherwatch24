
const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`
const form = document.querySelector("form")
const inputbox = document.querySelector("#inputbox")
const weather = document.querySelector(".weather-ui")
   
const getWeather = async(city) => {
    weather.innerHTML = `<h2> Loading... <h2>`
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    return showWeather(data)
}

const showWeather = (data) => {
    if (data.cod == "404") {
        weather.innerHTML = `<h2> City Not Found <h2>`
        return;
    }
    document.getElementById("inputbox").style.opacity = 0.2;
    if(data.weather[0].main == "Rain")
    document.body.style.background = " url('rainy.jpg')";
    if(data.weather[0].main == "Drizzle")
    document.body.style.background = " url('rainy.jpg')";
    if(data.weather[0].main == "Clouds"){
    document.body.style.background = " url('Cloudy.jpg')";
    }
    if(data.weather[0].main == "Smoke")
    document.body.style.background = " url('hazenew.jpg')";
    if(data.weather[0].main == "Haze")
    document.body.style.background = " url('hazenew.jpg')";
    if(data.weather[0].main == "Mist")
    document.body.style.background = " url('hazenew.jpg')";
    if(data.weather[0].main == "Fog")
    document.body.style.background = " url('hazenew.jpg')";
    if(data.weather[0].main == "Clear")
    document.body.style.background = " url('clearsky.jpg')";
    if(data.weather[0].main == "Thunderstorm")
    document.body.style.background = " url('thunder.jpg')";
    if(data.weather[0].main == "Dust")
    document.body.style.background = " url('sandy.jpg')";
    if(data.weather[0].main == "Sand")
    document.body.style.background = " url('sandy.jpg')";
    if(data.weather[0].main == "Snow")
    document.body.style.background = " url('snowy.jpg')";

    
    weather.innerHTML = `
    <p>${data.main.temp}℃<br>${data.weather[0].main}<br>${data.main.temp_min}℃(min)  ${data.main.temp_max}℃(max)</p>
    `
}


form.addEventListener(
    "submit",
    function(event) {
        getWeather(inputbox.value)
        event.preventDefault();
    }
)


