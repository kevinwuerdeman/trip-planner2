const mapboxgl = require("mapbox-gl");
const makeMarker = require('./markerFactory');

mapboxgl.accessToken = 'pk.eyJ1IjoiY2Fzc2lvemVuIiwiYSI6ImNqNjZydGl5dDJmOWUzM3A4dGQyNnN1ZnAifQ.0ZIRDup0jnyUFVzUa_5d1g';

const map = new mapboxgl.Map({
  container: "map",
  center: [-87.6354, 41.8885],
  zoom: 14,
  style: "mapbox://styles/mapbox/streets-v10"
});


const FSChicagoMarker = makeMarker([-87.6354, 41.8885]);
FSChicagoMarker.addTo(map);
