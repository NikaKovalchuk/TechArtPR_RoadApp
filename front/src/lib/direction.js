let Display = null;

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
    if (Display != null) {
        Display.setMap(null);
        Display = null;
    }
    directionsService.route(
        {
            origin: origin,
            destination: destination,
            waypoints: waypoints,
            travelMode: 'WALKING'
        },
        (results, status) => {
            if (status === 'OK') {
                Display = new maps.DirectionsRenderer({
                    map: map,
                    directions: results,
                    draggable: draggable,
                });
            }
        });
};
