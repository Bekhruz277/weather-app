const api = {
    key: "4c620f9a5a7fc8eb7f769eeb060d9ffd",
    baseurl: "https://api.openweathermap.org/data/2.5/",
};

const seacrhBox = document.querySelector('.seacrh-box');
seacrhBox.addEventListener("keypress",setQuery );
function setQuery(e) {
    if (e.keyCode == 13) {
        getResults(seacrhBox.value);
        console.log(seacrhBox.value);
    }
}
function getResults(query) {
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(weather => {
            return weather.json();
        }).then(displayResults);
}
function displayResults(weather) {
    console.log(weather);

    let city = document.querySelector('.location .city');
    city.innerHTML = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerHTML = dateBuiledr(now);

    let temp = document.querySelector('.temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

    let weatherEl = document.querySelector('.weather');
    weatherEl.innerHTML = weather.weather[0].main;

    let hilow = document.querySelector('.hi-low');
    hilow.innerHTML = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`

}


function dateBuiledr(b) {
    let months = [
        'January',
        'february',
        'March',
        'May',
        'June',
        'July',
        'August',
        'September',
        'Octomber',
        'November',
        'December'
    ];
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let day = days[b.getDay()];
    let date = b.getDate();
    let month = months[b.getMonth()];
    let year = b.getFullYear();

    return `${day}, ${date}, ${month}, ${year},`;
}