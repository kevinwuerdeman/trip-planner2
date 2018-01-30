const mapboxgl = require("mapbox-gl");

function makeMarker (coordinates) {
  const markerDomEl = document.createElement("div");
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";
  markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";

  return new mapboxgl.Marker(markerDomEl).setLngLat(coordinates);
}

module.exports = makeMarker;
