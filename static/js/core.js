function initMap() {
  var mapEl = document.getElementById('map'),
      $map = $(mapEl);

  if ($map.size() > 0) {
    var lon = parseFloat($map.data('coord-lon')),
      lat = parseFloat($map.data('coord-lat'));

    var map = new google.maps.Map(mapEl, {
      center: {
        lat: lat,
        lng: lon
      },
      scrollwheel: false,
      zoom: 17
    });
    new google.maps.Marker({
      map: map,
      position: {
        lat: lat,
        lng: lon
      },
      icon: '/static/images/map_pin_logo.png'
    });
  }
}
