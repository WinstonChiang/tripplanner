import mapboxgl from 'mapbox-gl';
import buildMarker from './marker';
mapboxgl.accessToken =
  'pk.eyJ1Ijoid2luc3Rvbi1jaGlhbmciLCJhIjoiY2tkeXBidWZwMng1YTJ3anptaXM3emx0MiJ9.MNOhGeG3w6iMpfd4LF-czg';

const map = new mapboxgl.Map({
  container: 'map',
  center: [-74.009, 40.705], // FullStack NY coordinates. Chicago: [-87.641, 41.895]
  zoom: 12, // starting zoom
  style: 'mapbox://styles/mapbox/streets-v10', // mapbox has lots of different map styles available
});

const markerDomEl = document.createElement('div');
markerDomEl.style.width = '32px';
markerDomEl.style.height = '39px';
markerDomEl.style.backgroundImage = 'url(http://i.imgur.com/WbMOfMl.png)';
new mapboxgl.Marker(markerDomEl).setLngLat([-74.009, 40.705]).addTo(map);

const marker = buildMarker('hotel', [-73.935242, 40.73061]); // or [-87.6354, 41.8885]
marker.addTo(map);
