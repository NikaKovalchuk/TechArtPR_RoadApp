import config from "../../config";

export const fields = [
    'name', 'formatted_address', 'place_id',
    'geometry', 'rating', 'price_level'
];

export const locationFields = [
    'name', 'formatted_address', 'place_id', 'geometry', 'rating',
    'formatted_phone_number', 'opening_hours', 'price_level', 'website'
];

export const bootstrapURLKeys = {
    key: config['GOOGLE_KEY_VALUE'],
    libraries: ['places', 'drawing'],
    language: 'ru',
};

export const center = {lat: config["MAP_CENTER_LAT"], lng: config["MAP_CENTER_LNG"]};
