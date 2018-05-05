var Body = document.querySelector("body");
var Button = document.querySelector(".navigation__toggle");
var List_status = document.querySelector(".navigation__list--opened");
Body.classList.remove("no-js");
Body.classList.add("js");
List_status.classList.toggle("navigation__list--closed");
Button.addEventListener("click", function (evt) {
  evt.preventDefault();
  List_status.classList.toggle("navigation__list--closed");
});

function initialize() {
  var mapOptions = {
    zoom: 17,
    center: new google.maps.LatLng(((screen.width < 1300) ? 59.93877121663107 : 59.939075), ((screen.width < 1300) ? 30.323274149999975 : 30.31965))
  };
  var map = new google.maps.Map(document.getElementById("mapid"), mapOptions);
  var image =  "/img/map-pin.png";
  var myLatLng = new google.maps.LatLng(59.93877121663107, 30.323274149999975);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
google.maps.event.addDomListener(window, "load", initialize);
