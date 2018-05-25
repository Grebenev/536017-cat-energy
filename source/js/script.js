var body = document.querySelector("body");
var nav = document.querySelector(".navigation");
var navToggle = nav.querySelector(".navigation__toggle");
var navList = nav.querySelector(".navigation__list");

body.classList.remove("no-js");
body.classList.add("js");

navToggle.classList.add("navigation__toggle--off");
navList.classList.add("navigation__list--off");

navToggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  navToggle.classList.toggle("navigation__toggle--off");
  navList.classList.toggle("navigation__list--off");
});

var bigPin = {width: 124, height: 106};
var smallPin = {width: 62, height: 53};

function initMap() {
  if(document.body.clientWidth < 768) {
    var mapCenter = {lat: 59.938840, lng: 30.323200};
    var pinCenter = {lat: 59.938800, lng: 30.323200};
    var iconSize = smallPin;
    var Zoom = 16.7;

  } else if (document.body.clientWidth >= 768 && document.body.clientWidth < 1300) {
    var mapCenter = {lat: 59.938960, lng: 30.323120};
    var pinCenter = {lat: 59.938770, lng: 30.323100};
    var iconSize = bigPin;
    var Zoom = 17.5;

  } else if (document.body.clientWidth >= 1300) {
    var mapCenter = {lat: 59.939065, lng: 30.319500};
    var pinCenter = {lat: 59.938800, lng: 30.323200};
    var iconSize = bigPin;
    var Zoom = 17;
  }

  var map = new google.maps.Map(document.getElementById("mapid"), {
    zoom: Zoom,
    center: mapCenter
  });

  var image = new google.maps.MarkerImage(
    "img/map-pin.png",
    null,
    null,
    null,
    iconSize
  );

  var marker = new google.maps.Marker({
    position: pinCenter,
    map: map,
    icon: image
  });

  google.maps.event.addDomListener(window, "resize", function() {
    if(document.body.clientWidth >= 768) {
      marker.setIcon(
        new google.maps.MarkerImage(
          marker.getIcon().url,
          null,
          null,
          null,
          bigPin
        )
      );
    } else {
      marker.setIcon(
        new google.maps.MarkerImage(
          marker.getIcon().url,
          null,
          null,
          null,
          smallPin
        )
      );
    }

    if(document.body.clientWidth >= 1300) {
      map.setCenter(new google.maps.LatLng(59.939065, 30.319335));
    } else {
      map.setCenter(new google.maps.LatLng(59.938800, 30.323200));
    }
  });
}
google.maps.event.addDomListener(window, "load", initMap);
