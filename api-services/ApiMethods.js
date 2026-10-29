import apiConfig from './api.json';

class ApiMethods {
    constructor(request) {
        this.request = request;
    }

    url(endpoint) {
        const path = apiConfig.endpoints[endpoint];
        if (!path) {
            throw new Error(`Unknown API endpoint: ${endpoint}`);
        }
        return `${apiConfig.baseUrl}${path}`;
    }

    get(endpoint) {
        return this.request.get(this.url(endpoint));
    }

    post(endpoint, data) {
        return this.request.post(this.url(endpoint), data === undefined ? {} : { data });
    }

    put(endpoint, data) {
        return this.request.put(this.url(endpoint), data === undefined ? {} : { data });
    }

    delete(endpoint) {
        return this.request.delete(this.url(endpoint));
    }

    update(endpoint, data) {
        return this.request.patch(this.url(endpoint), { data });
    }
}

export default ApiMethods;
