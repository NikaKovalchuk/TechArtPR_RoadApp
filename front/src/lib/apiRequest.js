const apiRequest = (url, options = {}, body, json = true) => {
    const requestOptions = body ? {...options, body} : options;
    const responsePromise = fetch(url, requestOptions);
    return responsePromise.then(response => json ? response.json() : response)
};

const get = (url) => {
    return apiRequest(url);
};

const post = (url, payload) => {
    return apiRequest(
        url,
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        },
    );
};

const put = (url, payload) => {
    return apiRequest(
        url,
        {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        },
    );
};

const remove = (url) => {
    return apiRequest(
        url,
        {
            method: "DELETE",
        },
        {},
        false,
    );
};

export default {
    get,
    post,
    put,
    remove,
};
