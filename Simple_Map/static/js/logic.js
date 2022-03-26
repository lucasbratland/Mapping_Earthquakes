//  Add console.log to check if code is working
console.log("working");

// Create the map object with a center and zoom level
let map = L.map('mapid').setView([34.0522, -118.2437], 14);

// Add marker ot the map for LA
// let marker = L.marker([34.0522, -118.2437]).addTo(map);

// Add a cirle to LA on the map, radius is in meters
// L.circle([34.0522, -118.2437], {
//     radius: 300,
//     color: 'black',
//     fillColor: 'yellow'
// }).addTo(map);

// Using circleMarker the radius will be in pixels
L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color: 'black',
    fillColor: 'yellow'
}).addTo(map);

// We create the tile later that will be the backgroud of the map
// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     // id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: API_KEY
// }).addTo(map);

// We create the tile later that will be the backgroud of the map
let dark = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    // id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
}).addTo(map);