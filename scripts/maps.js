var mapOak;

function initMap() {
    mapOak = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 36.9755,
            lng: -87.0973
        },
        zoom: 5,
        gestureHandling: 'none',
        mapTypeId: 'hybrid'
    });

    var region = [{
            lat: 45.732973,
            lng: -94.303194
        },
        {
            lat: 41.709750,
            lng: -70.474357
        },
        {
            lat: 30.704642,
            lng: -81.536214
        },
        {
            lat: 29.927668,
            lng: -94.274882
        }
    ]

    var regionShade = new google.maps.Polygon({
        paths: region,
        strokeColor: '#00c41d',
        strokeOpacity: '0.75',
        strokeWeight: 2,
        fillColor: '#24692e',
        fillOpaticy: 0.9
    });
    regionShade.setMap(mapOak);
}