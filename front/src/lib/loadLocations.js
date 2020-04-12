import {fields} from "../components/pages/constants";

export default function (map, maps, locationKeys, callback) {
    if (!maps) return;

    const placeService = new maps.places.PlacesService(map);
    var locationsCounter = 0;

    locationKeys.forEach((location, idx) => {
        const request = {placeId: location, fields: fields};
        placeService.getDetails(request, (result, status) => {
            locationsCounter++;
            if (status === 'OK') {
                const newLocation = {
                    location: result.geometry.location,
                    id: result.place_id,
                    order: idx,
                    ...result,
                };
                callback(newLocation, locationsCounter === locationKeys.length);
            }
        });
    })
};
