"use strict"
mapboxgl.accessToken = mapBoxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 10,
    center:[-96.7970, 32.7767]
});

console.log('hello')


$.get("http://api.openweathermap.org/data/2.5/weather", {
    APPID: weatherToken,
    q:     "Dallas, US",
    units: "imperial"
}).done(function(data){
    console.log(data)
});