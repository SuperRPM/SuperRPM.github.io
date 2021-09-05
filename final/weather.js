const WEATHER_API = "9cdbab62ab37ad194f3b4b3fb332d1b2";

function success(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const location = document.querySelector("#weather span:first-child")
        const weather = document.querySelector("#weather span:nth-child(2)")
        const temp = document.querySelector("#weather span:last-child")

        location.innerText = data.name
        temp.innerText = `${data.main.temp}°C`
        weather.innerText =  data.weather[0].main;
    });
}

function err() {
    alert('err')
}

navigator.geolocation.getCurrentPosition(success, err);