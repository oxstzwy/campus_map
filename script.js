const map = L.map('map').setView([-3.096, -59.969], 14.5);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

    L.marker([-3.096, -59.969]).addTo(map)
        .bindPopup('Bem vindo a Universidade Federal do amazonas')
        .openPopup(); 


// codigo teste para diferentes tipos de mapa base (não funcionando)

/*
var osmMap = L.tileLayer.provider('OpenStreetMap.Mapnik');
var StamenMap = L.tileLayer.provider('Stadia.StamenWatercolor');
var imageryMap = L.tileLayer.provider('Esri.WorldImagery');

var baseMaps = {
    OSM: osmMap,
    'Stamen Watercolor': StamenMap,
    'Word Imagery': imageryMap
}

var map = L.map('map', {
    center: [-3.096, -59.969],
    zoom: 14,
    layers: [osmMap]

});

var mapLayers = L.control.layers(baseMaps).addTo(map);
/*

/* ferramenta de dimensão comprimento
var ctlMeasure = L.control.polylineMeasure({
	position: "topleft",
	measureControlTitle: "Measure Lenght",
}).addTo(map);
*/

// Adicionar camandas WMS Base de dados geoserver

let geoServerIPPort = 'localhost8008';
let geoServerWorkspace = 'campus-map';
let stateLayerName = 'campus-map:ind_st';

let vetores = 

// adicionar coordenadas no cursor 

map.on("click", e => {
    const {lat, lng} = e.latlng
    console.log (lat, ln) //ver algum metodo de mostrar na tela exp: alert
    })
