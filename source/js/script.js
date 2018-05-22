var body = document.querySelector("body");
var nav = document.querySelector(".navigation");
var navToggle = nav.querySelector(".navigation__toggle");
var navList = nav.querySelector(".navigation__list");
var ScreenTablet = 768;
var ScreenDeskop = 1300;

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
    center: new google.maps.LatLng(((screen.width < ScreenDeskop) ? 59.93877121663107 : 59.939075), ((screen.width < ScreenDeskop) ? 30.323274149999975 : 30.31965))
  };
  var map = new google.maps.Map(document.getElementById("mapid"), mapOptions);
  if(window.screen.width <= ScreenTablet) {
    var image = "img/map-small-pin.png";
  } else {
    var image = "img/map-pin.png";
  }
  var myLatLng = new google.maps.LatLng(59.93877121663107, 30.323274149999975);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
google.maps.event.addDomListener(window, "load", initialize);
