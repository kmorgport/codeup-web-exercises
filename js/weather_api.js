"use strict"
mapboxgl.accessToken = mapBoxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 10,
    center:[-96.7970, 32.7767]
});

console.log('hello')
function makeCard(info){
    const wrapper = document.getElementsByClassName('wrapper')
    const card = document.createElement('div');
    card.setAttribute('class', 'card m-2');
    const header = document.createElement('div');
    header.setAttribute('class', 'card-header');
    header.textContent= info.dt_txt.slice(0,10);
    const weath = document.createElement('ul');
    weath.setAttribute('class', 'list-group list-group-flush');
    const temp = document.createElement('li');
    temp.setAttribute('class', 'list-group list-group-flush');
    temp.innerHTML= info.main.temp_min +"°F/"+info.main.temp_max+"°F"+"<br>"+"<img src="+info.weather[0].id+".png width=\"50\" height=\"50\">";
    const descr = document.createElement('li');
    descr.setAttribute('class', 'list-group list-group-flush');
    descr.textContent = "Description: "+info.weather[0].description;
    const humidity = document.createElement('li');
    humidity.setAttribute('class', 'list-group list-group-flush');
    humidity.textContent = "Humidity: "+info.main.humidity;
    const wind = document.createElement('li');
    wind.setAttribute('class', 'list-group list-group-flush');
    wind.textContent = "Wind: "+info.wind.speed;
    const pressure = document.createElement('li');
    pressure.setAttribute('class', 'list-group list-group-flush');
    pressure.textContent = "Wind: "+info.main.pressure;
    weath.appendChild(temp);
    weath.appendChild(humidity);
    weath.appendChild(wind);
    weath.appendChild(pressure);
    card.appendChild(header);
    card.appendChild(weath);
    wrapper.appendChild(card);
}
$.get("http://api.openweathermap.org/data/2.5/forecast", {
    APPID: weatherToken,
    lat: 32.779167,
    lon: -96.808891,
    units: "imperial",
    cnt: 40
}).done(function(data){
    const days = data.list.filter(e=>data.list.indexOf(e)%8===0);
    console.log(days)
    days.forEach(day=>{
        makeCard(day)
    })
});
