"use strict"
mapboxgl.accessToken = mapBoxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 10,
    center:[-96.7970, 32.7767]
});


const wrapper = document.getElementById('wrapper')
function makeCard(info){
    const card = document.createElement("div");
    card.setAttribute('class', 'card m-2 rounded');
    const header = document.createElement('div');
    header.setAttribute('class', 'card-header justify-center');
    header.textContent= info.dt_txt.slice(0,10);
    const weath = document.createElement('ul');
    weath.setAttribute('class', 'list-group list-group-flush');
    const temp = document.createElement('li');
    temp.setAttribute('class', 'list-group-item');
    temp.innerHTML= info.main.temp_min +"°F/"+info.main.temp_max+"°F"+"<br>"+"<img src=http://openweathermap.org/img/w/"+info.weather[0].icon+".png width=\"50\" height=\"50\">";
    const descr = document.createElement('li');
    descr.setAttribute('class', 'list-group-item');
    descr.textContent = "Description: "+info.weather[0].description;
    const humidity = document.createElement('li');
    humidity.setAttribute('class', 'list-group-item');
    humidity.textContent = "Humidity: "+info.main.humidity;
    const wind = document.createElement('li');
    wind.setAttribute('class', 'list-group-item');
    wind.textContent = "Wind: "+info.wind.speed;
    const pressure = document.createElement('li');
    pressure.setAttribute('class', 'list-group-item');
    pressure.textContent = "Pressure: "+info.main.pressure;
    weath.appendChild(temp);
    weath.appendChild(descr)
    weath.appendChild(humidity);
    weath.appendChild(wind);
    weath.appendChild(pressure);
    card.appendChild(header);
    card.appendChild(weath);
    wrapper.appendChild(card);
}

function removeCards(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }

}

function updateWeather(lat,lon){
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: weatherToken,
        lat: lat,
        lon: lon,
        units: "imperial",
        cnt: 40
    }).done(function(data){
        const days = data.list.filter(e=>data.list.indexOf(e)%8===0);
        if(wrapper.hasChildNodes()){
            removeCards(wrapper)
        }
        days.forEach(day=>{
                makeCard(day)
        })
    });
}
// function updateCity(input){
//     const current = document.getElementById('current')
//     let capital = input.split(' ').map(e=>e[0].toUpperCase()).join(' ')
// }
function updateCity(input){
    const current = document.getElementById('current')
    let capital = input.split(' ').map(e=>e.charAt(0).toUpperCase()+e.substring(1)).join(' ')
    current.innerText= "Current City: "+capital
}

const popUp = new mapboxgl.Popup()
const locsearch = document.getElementById("search");
locsearch.addEventListener("click",e=>{
    e.preventDefault();
    let address = document.getElementById("text").value;
    updateCity(address);
    geocode(address, mapBoxToken).then(result =>{
        map.jumpTo({center: result});
        map.setZoom(15);
        let marker = new mapboxgl.Marker()
        marker.setLngLat(result);
        popUp.setHTML(address).addTo(map)
        marker.setPopup(popUp)
        return result
    }).then(result=>{
        updateWeather(result[1],result[0])
    })
})

const coordinates = document.getElementById('coordinates');
const marker = new mapboxgl.Marker({
    draggable: true
})
    .setLngLat([-96.7970, 32.7767])
    .addTo(map);

function onDragEnd() {
    let lngLat = marker.getLngLat();
    coordinates.style.display = 'block';
    let lng = lngLat.lng;
    let lat = lngLat.lat
    coordinates.innerHTML =
        'Longitude: ' + lngLat.lng + '<br />Latitude: ' + lngLat.lat;
    updateWeather(lat,lng)
    reverseGeocode(lngLat,mapBoxToken).then(result=>{
        let address = result.split(',')
        const current = document.getElementById('current')
        current.innerText = "Current City: "+address[1]
    })

}

marker.on('dragend', onDragEnd);
