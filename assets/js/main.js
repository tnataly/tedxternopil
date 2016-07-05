$(function() {

// Display a google map inside the venue section
/*
  function init_map() {
    var var_location = new google.maps.LatLng(49.554557, 25.597648);
    var var_center = new google.maps.LatLng(49.554643, 25.600495);

    var var_mapoptions = {
      center: var_center,
      zoom: 18,
      scaleControl: false,
      streetViewControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP

    };

    var var_marker = new google.maps.Marker({
      position: var_location,
      map: var_map,
      title:"Палац кіно",
      draggable: false,
      animation: google.maps.Animation.DROP
    });

    var var_map = new google.maps.Map(document.getElementById("map"),
        var_mapoptions);

    var_marker.setMap(var_map);

      }


    google.maps.event.addDomListener(window, 'load', init_map);
*/
 // Preloader or something else....


// Contact Form JS
  $('#contact-form').validator();

  $('#contact-form').on('submit', function (e) {
      if (!e.isDefaultPrevented()) {
          var url = "contact.php";

          $.ajax({
              type: "POST",
              url: url,
              data: $(this).serialize(),
              success: function (data)
              {
                  var messageAlert = 'alert-' + data.type;
                  var messageText = data.message;

                  var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                  if (messageAlert && messageText) {
                      $('#contact-form').find('.messages').html(alertBox);
                      $('#contact-form')[0].reset();
                  }
              }
          });
          return false;
      }
  })


});
