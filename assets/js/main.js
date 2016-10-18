$(function() {

  // Display a google map inside the venue section
  function initMap() {
    var palacKino = {lat: 49.554508, lng: 25.597816};
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 18,
      center: palacKino,
      scrollwheel: false,
      zoomControl : false,
      mapTypeControl: false,
      streetViewControl: false
    });
    var marker = new google.maps.Marker({
      position: palacKino,
      map: map
    });
  }

  google.maps.event.addDomListener(window, 'load', initMap);

});
