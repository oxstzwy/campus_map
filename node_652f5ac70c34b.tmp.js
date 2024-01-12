var map = L.map('map').setView([-3.096, -59.969], 14.5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

    L.marker([-3.096, -59.969]).addTo(map)
        .bindPopup('welcome to Hell')
        .openPopup(); 


/* codigo teste para medir distancias de feiçoes
var osmap = L.tileLayer.province('OpenStreetMap.Mapnik',);
var Stadia_StamenWatercolor = L.tileLayer.province('Stamen.Watercolor');

var BaseMaps = {
    osm: osmap,
    'Stamen Watercolor': Stadia_StamenWatercolor
}

var map = L.map('map', {
    center:[-3.096, -59.969],
    layers:[osmap]
});

var mapLayers = L.control.layers(BaseMaps).addTo(map);



var ctlMeasure = L.control.polylineMeasure({
	position: "topleft",
	measureControlTitle: "Measure Lenght",
}).addTo(map);
*/

// Adicionar camandas vetoriais Base de dados 

npm install leaflet-providers
