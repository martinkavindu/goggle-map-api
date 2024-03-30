function initMap() {
    var options = {
        center: {lat: 0.0236, lng: 37.9062},
        zoom: 8,
    };

    var map = new google.maps.Map(document.getElementById("map"), options);

    // var marker = new google.maps.marker.AdvancedMarkerElement({
    //     position: {lat: 3.5107, lng: 39.9093},
    //     map: map,
    //     icon: "location.png"
    // });
    //   new google.maps.Marker({
    //     position: {lat:-3.5107, lng: 39.9093},
    //     map,
    //     icon: "https://img.icons8.com/nolan/2x/marker.png",
    //   });

//     const contentString =
//     '<div id="content">' +
//     '<div id="siteNotice">' +
//     "</div>" +
//     '<h1 id="firstHeading" class="firstHeading">Coming soon</h1>' +
//     '<div id="bodyContent">' +
//     '<p> We dont offer Unlimited Internet in your area at present, send us your details and we will contact you when it is available</p>' +
//     "</div>" +
//     "</div>";
//   const infowindow = new google.maps.InfoWindow({
//     content: contentString,
//     ariaLabel: "Welcome",
//   });
//   const marker = new google.maps.Marker({
//     position: {lat:-3.5107, lng: 39.9093},
//     map,
//     icon: "https://img.icons8.com/nolan/2x/marker.png",
//   });

//   marker.addListener("click", () => {
//     infowindow.open({
//       anchor: marker,
//       map,
//     });
//   });
function addMarker(location){
  const marker = new google.maps.Marker({
   position: location,
    map,
   icon: "https://img.icons8.com/nolan/2x/marker.png",
   });

}
addMarker({lat:-3.5107, lng: 39.9093});
addMarker({lat:1.2921, lng: 36.8219});
addMarker({lat:-4.0435, lng: 39.6682});


}
