mapboxgl.accessToken = mapBoxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 10,
    center:[-96.7970, 32.7767]
});

var marker = new mapboxgl.Marker()
.setLngLat([-96.7436, 32.9095])
.addTo(map);


// var smithMarker = new mapboxgl.Marker()
//     .setLngLat([-77.0259, 38.8920,])
//     .addTo(map);
//
// var searsMarker = new mapboxgl.Marker()
//     .setLngLat([-87.6354,41.8789])
//     .addTo(map);
//
// var aacenterMarker = new mapboxgl.Marker()
//     .setLngLat([-96.8104, 32.7872])
//     .addTo(map);
//
var lalibela = new mapboxgl.Popup({
    className: 'lalibela-popup'
})
.setHTML("<p>Lalibela Ethiopian Restaurant</p>")
.addTo(map);

// var smithPopup = new mapboxgl.Popup({
//     className: 'smith-popup'
// })
//     .setHTML("<p>I'm the Smithsonian Natural History Museum!</p>")
//     .addTo(map)
//
// var searsPopUp = new mapboxgl.Popup({
//     className: 'searsPopup'
// })
//     .setHTML("<p>I'm a really tall building</p>")
//     .addTo(map)
//
// var dallasPopUp = new mapboxgl.Popup({
//     className: 'alamo-popup'
// })
//     .setHTML("<p>Mark Cuban is my Step-Dad</p>")
//     .addTo(map)
//
// marker.setPopup(lalibela);
// smithMarker.setPopup(smithPopup);
// searsMarker.setPopup(searsPopUp);
// aacenterMarker.setPopup(dallasPopUp);
//
// geocode("1717 Annex St, Dallas, TX 75204", mapBoxToken).then(function(result){
//     console.log(result);
//     map.jumpTo({center: result}); //map.setCenter to coord
//     map.setZoom(15)
//     marker.setLngLat(result)
//     marker.setPopup(dallasPopUp)
// })

map.on('load', function () {
    map.addSource('places', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                {
                    'type': 'Feature',
                    'properties': {
                        'description':
                            '<strong>Lalibela</strong><p><a href=https://www.yelp.com/biz/lalibela-ethiopian-restaurant-dallas target="_blank">Lalibela</a> one of the highest rated Ethiopian restaurants in Dallas. Try their Doro Wat on their home made Injeera bread.</p>',
                        'icon': 'music'
                    },
                    'geometry': {
                        'type': 'Point',
                        'coordinates': [-96.7436, 32.9095]
                    }
                }
            ]
        }
    })

map.addLayer({
    'id': 'places',
    'type': 'symbol',
    'source': 'places',
    'layout': {
        'icon-image': '{icon}-15',
        'icon-allow-overlap': true
    }
});

map.on('click', 'places', function (e) {
    var coordinates = e.features[0].geometry.coordinates.slice();
    var description = e.features[0].properties.description;

// Ensure that if the map is zoomed out such that multiple
// copies of the feature are visible, the popup appears
// over the copy being pointed to.
    while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
    }

    new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(description)
        .addTo(map);
});

map.on('mouseenter', 'places', function () {
    map.getCanvas().style.cursor = 'pointer';
});

map.on('mouseleave', 'places', function () {
    map.getCanvas().style.cursor = '';
});
});