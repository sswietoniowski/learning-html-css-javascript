let map;

// Here you'll find the documentation: https://developers.google.com/maps/documentation/javascript/overview#maps_map_simple-typescript

// Initialize and add the map
function initMap() {
  // Your location
  // Use: https://www.latlong.net/convert-address-to-lat-long.html to find it
  const loc = { lat: 51.11079, lng: 17.03186 };
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc,
  });
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map });
}
