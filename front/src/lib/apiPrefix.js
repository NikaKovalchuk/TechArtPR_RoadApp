import config from "../config";

export default function (endpoint) {
    return config["API_ROOT"] + endpoint;
};
