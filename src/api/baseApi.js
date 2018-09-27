import 'whatwg-fetch';
import qs from 'qs';

const httpStatusCode =
    {
        Ok: 200,
        Unauthorized: 401,
        Forbidden: 403,
        ServerError: 500,
        NoContent: 204
    };

export const httpVerb =
    {
        GET: 'GET',
        POST: 'POST',
        PUT: 'PUT',
        DELETE: 'DELETE'
    };

let siteUrl;
if (process.env.MODE_ENV === 'production'){
    //siteUrl = window.location.protocol + '//' + window.location.host;
    siteUrl = 'http://api.malahit54.ru/api';
} else {
    siteUrl = 'http://api.malahit54.ru/api';
}

function callServiceInner(settings) {
    let baseUrl = settings.relativeUrl ? siteUrl + settings.relativeUrl : settings.url;
    let method = settings.method || httpVerb.POST;
    let url = method === httpVerb.GET && settings.data ? baseUrl + '?' + qs.stringify(settings.data) : baseUrl;
    let callSettings = {
        method: method,
        // headers: {
        //     'Content-Type': 'application/json; charset=utf-8',
        //     'X-Requested-With': 'XMLHttpRequest',
        //     'Access-Control-Allow-Origin':'*',
        // },
        //credentials: 'same-origin',
        body: (settings.data && method !== httpVerb.GET) ? settings.data : undefined
    };

    function checkStatus(response) {
        if (response.status >= 200 && response.status < 300){
            if (response.status === httpStatusCode.NoContent)
                return Promise.resolve();

            return Promise.resolve(response.json());
            // return new Promise((resolve) => {
            //     setTimeout(() => {
            //         resolve(response.json());
            //     }, 2000)
            // });
        }
        else {
            return Promise.reject(response);
        }
    }

    function createRequest() {
        return window.fetch(url,callSettings).then(checkStatus);
    }

    return createRequest();
}

function pick(object){
    let result = {};
    Object.keys(object)
        .forEach(key => {
            if (object[key] !== null && object[key] !== undefined && object[key] !== '')
                result[key] = object[key];
        });
    return result;
}

class BaseApi{
    static callService(settings) {
        if (settings.data && !Array.isArray(settings.data) && typeof settings.data === 'object' && !(settings.data instanceof FormData)) {
            settings.data = pick(settings.data);
        }
        return callServiceInner(settings);
    }
}
export default BaseApi;