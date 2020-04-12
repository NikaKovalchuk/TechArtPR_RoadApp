export default function (map, maps, location, callback) {
    const geocoder = new maps.Geocoder(map);
    geocoder.geocode({'location': location}, (results, status) => {
        if (status === 'OK') callback(results[0])
    });
};
