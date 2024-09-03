import L from 'leaflet';

const map = L.map('map', {
    center: [14.71889, -90.64417],
    zoom: 7,
    layers: []
});

// Añadir 
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


const markerLayer = L.layerGroup();

const icon = L.icon({
    iconUrl: './images/cit.png',
    iconSize: [40, 40]
});

L.marker([14.71889, -90.64417], {
    icon: icon
}).addTo(markerLayer);

markerLayer.addTo(map);