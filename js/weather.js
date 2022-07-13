const API_KEY = "06d62ba5192639a80feba7a1d980b817"

function onGeoOK(location) {
    const lat = location.coords.latitude;
    const lng = location.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
    fetch(url)
    .then(respone => respone.json())
    .then((data) => {
        const weather = document.querySelector("#weather span:first-child")
        const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
    });
}

function onGeoError () {
    alert("can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);