$(function() {

// Display a google map inside the venue section
  function init_map() {
    var var_location = new google.maps.LatLng(49.554557, 25.597648);
    var var_center = new google.maps.LatLng(49.554643, 25.600495);

    var var_mapoptions = {
      center: var_center,
      zoom: 18
    };

    var var_marker = new google.maps.Marker({
      position: var_location,
      map: var_map,
      title:"Палац кіно"});

    var var_map = new google.maps.Map(document.getElementById("venue"),
        var_mapoptions);

    var_marker.setMap(var_map);

      }

    google.maps.event.addDomListener(window, 'load', init_map);

 // Preloader or something else....


});
