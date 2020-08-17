import mapboxgl from 'mapbox-gl';

const buildMarker = function (type, LngLatArray) {
  if (type === 'activity') {
    const markerDomActivity = document.createElement('div');
    markerDomActivity.style.width = '32px';
    markerDomActivity.style.height = '39px';
    markerDomActivity.style.backgroundImage =
      'url(http://i.imgur.com/WbMOfMl.png)';

    return new mapboxgl.Marker(markerDomActivity).setLngLat(LngLatArray);
  } else if (type === 'hotel') {
    const markerDomHotel = document.createElement('div');
    markerDomHotel.style.width = '32px';
    markerDomHotel.style.height = '39px';
    markerDomHotel.style.backgroundImage =
      'url(http://i.imgur.com/D9574Cu.png)';

    return new mapboxgl.Marker(markerDomHotel).setLngLat(LngLatArray);
  } else if (type === 'restaurant') {
    const markerDomRestaurant = document.createElement('div');
    markerDomRestaurant.style.width = '32px';
    markerDomRestaurant.style.height = '39px';
    markerDomRestaurant.style.backgroundImage =
      'url(http://i.imgur.com/cqR6pUI.png)';

    return new mapboxgl.Marker(markerDomRestaurant.setLngLat(LngLatArray));
  }
};

export default buildMarker;
