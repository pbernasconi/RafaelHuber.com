/* affix the navbar after scroll below header */
$('#nav').affix({
  offset: {
    top: $('header').height() - $('#nav').height() + 100
  }
});

/* highlight the top nav as scrolling occurs */
$('body').scrollspy({ target: '#nav' });


/* smooth scrolling for nav sections */
$('#nav .navbar-nav li>a').click(function () {
  var link = $(this).attr('href');
  var posi = $(link).offset().top + 20;
  $('body,html').animate({scrollTop: posi}, 700);
});


google.maps.event.addDomListener(window, 'load', init);

function init() {
  var mapOptions = {
    zoom: 14,

    center: new google.maps.LatLng(46.187145, 6.140515),
    disableDefaultUI: true,
    scrollwheel: false,
    draggable: false,

    // How you would like to style the map.
    // This is where you would paste any style found on Snazzy Maps.
    styles: [
      {"featureType": "water", "elementType": "geometry", "stylers": [
        {"color": "#a2daf2"}
      ]},
      {"featureType": "landscape.man_made", "elementType": "geometry", "stylers": [
        {"color": "#f7f1df"}
      ]},
      {"featureType": "landscape.natural", "elementType": "geometry", "stylers": [
        {"color": "#d0e3b4"}
      ]},
      {"featureType": "landscape.natural.terrain", "elementType": "geometry", "stylers": [
        {"visibility": "off"}
      ]},
      {"featureType": "poi.park", "elementType": "geometry", "stylers": [
        {"color": "#bde6ab"}
      ]},
      {"featureType": "poi", "elementType": "labels", "stylers": [
        {"visibility": "off"}
      ]},
      {"featureType": "poi.medical", "elementType": "geometry", "stylers": [
        {"color": "#fbd3da"}
      ]},
      {"featureType": "poi.business", "stylers": [
        {"visibility": "off"}
      ]},
      {"featureType": "road", "elementType": "geometry.stroke", "stylers": [
        {"visibility": "off"}
      ]},
      {"featureType": "road", "elementType": "labels", "stylers": [
        {"visibility": "off"}
      ]},
      {"featureType": "road.highway", "elementType": "geometry.fill", "stylers": [
        {"color": "#ffe15f"}
      ]},
      {"featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [
        {"color": "#efd151"}
      ]},
      {"featureType": "road.arterial", "elementType": "geometry.fill", "stylers": [
        {"color": "#ffffff"}
      ]},
      {"featureType": "road.local", "elementType": "geometry.fill", "stylers": [
        {"color": "black"}
      ]},
      {"featureType": "transit.station.airport", "elementType": "geometry.fill", "stylers": [
        {"color": "#cfb2db"}
      ]}
    ]
  };

  var mapElement = document.getElementById('map');

  var map = new google.maps.Map(mapElement, mapOptions);

  var image = 'img/map-marker.png';
  var myLatLng = new google.maps.LatLng(46.187145, 6.140515);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map
  });
}
