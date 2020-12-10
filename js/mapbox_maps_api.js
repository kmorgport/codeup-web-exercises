mapboxgl.accessToken = mapBoxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 10,
    center:[-98.4916, 29.4252]
});

var marker = new mapboxgl.Marker()
.setLngLat([-98.4916, 29.4260])
.addTo(map);

var smithMarker = new mapboxgl.Marker()
    .setLngLat([-77.0259, 38.8920,])
    .addTo(map);

var searsMarker = new mapboxgl.Marker()
    .setLngLat([-87.6354,41.8789])
    .addTo(map);

var aacenterMarker = new mapboxgl.Marker()
    .setLngLat([-96.8104, 32.7872])
    .addTo(map);

var alamoPopup = new mapboxgl.Popup({
    className: 'alamo-popup'
})
.setHTML("<p>Remember the Alamo!</p>")
.addTo(map)

var smithPopup = new mapboxgl.Popup({
    className: 'smith-popup'
})
    .setHTML("<p>I'm the Smithsonian Natural History Museum!</p>")
    .addTo(map)

var searsPopUp = new mapboxgl.Popup({
    className: 'searsPopup'
})
    .setHTML("<p>I'm a really tall building</p>")
    .addTo(map)

var dallasPopUp = new mapboxgl.Popup({
    className: 'alamo-popup'
})
    .setHTML("<p>Mark Cuban is my Step-Dad</p>")
    .addTo(map)

marker.setPopup(alamoPopup);
smithMarker.setPopup(smithPopup);
searsMarker.setPopup(searsPopUp);
aacenterMarker.setPopup(dallasPopUp);