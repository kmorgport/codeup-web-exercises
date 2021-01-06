"use strict"
mapboxgl.accessToken = mapBoxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 10,
    center:[-96.7970, 32.7767]
});

var zoomSelect = document.getElementById("zoom-select")
zoomSelect.addEventListener("change", function(e){
    var zoomValue = zoomSelect.options[zoomSelect.selectedIndex].value;
    map.setZoom(parseInt(zoomValue));
})

console.log('hello')