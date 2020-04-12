// function makeMarker(map, maps, position, idx) {
//     new maps.Marker({
//         position: position,
//         map: map,
//         label: String.fromCharCode(97 + idx).toUpperCase()
//     });
// }

export default function (map, maps, locations, draggable = true) {
    const directionsService = new maps.DirectionsService(map);

    const origin = locations[0].location;
    const destination = locations.length > 1 ?
        locations[locations.length - 1].location :
        locations[0].location;
    const waypointList = locations.length > 2 && locations.slice(1, locations.length - 1);
    const waypoints = waypointList ? waypointList.map(waypoint => ({
        location: waypoint.location,
        stopover: true,
    })) : [];

    map.setOptions({center: locations[0].location,});
    directionsService.route(
        {
            origin: origin,
            destination: destination,
            waypoints: waypoints,
            travelMode: 'WALKING'
        },
        (results, status) => {
            if (status === 'OK') {
                new maps.DirectionsRenderer({
                    map: map,
                    directions: results,
                    draggable: draggable,
                });
                // if (!draggable) return;
                // locations.forEach((location, idx) => makeMarker(map, maps, location.location, idx))
            }
        });
};
