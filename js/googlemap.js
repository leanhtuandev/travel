var marker;

function initMap() {
    var options = {
        zoom: 17,
        center: { lat: 21.58504, lng: 105.806381 }
    };

    var map = new google.maps.Map(document.getElementById('map'), options);
    marker = new google.maps.Marker({
        position: { lat: 21.58504, lng: 105.806381 },
        animation: google.maps.Animation.DROP,
    });
    marker.addListener('click', toggleBounce);
    marker.setMap(map);
    console.log(marker);
}

function toggleBounce() {
    if (marker.getAnimation() !== null) {
        marker.setAnimation(null);
    } else {
        marker.setAnimation(google.maps.Animation.BOUNCE);
    }
}

// function drop() {
//     for (var i = 0; i < markerArray.length; i++) {
//         setTimeout(function() {
//             addMarkerMethod();
//         }, i * 200);
//     }
// }