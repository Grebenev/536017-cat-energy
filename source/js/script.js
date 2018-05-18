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

function initialize() {
  var mapOptions = {
    zoom: 17,
    center: new google.maps.LatLng(((screen.width < 1300) ? 59.93877121663107 : 59.939075), ((screen.width < 1300) ? 30.323274149999975 : 30.31965))
  };
  var map = new google.maps.Map(document.getElementById("mapid"), mapOptions);
  var image = "img/map-pin.png";
  var myLatLng = new google.maps.LatLng(59.93877121663107, 30.323274149999975);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
google.maps.event.addDomListener(window, "load", initialize);
