function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 55.763431,
      lng: 37.656051
    },
    scrollwheel: false,
    zoom: 17
  });
  new google.maps.Marker({
    map: map,
    position: {
      lat: 55.763431,
      lng: 37.656051
    },
    icon: '/static/images/map_pin_logo.png'
  });
}
