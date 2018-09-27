import BaseApi,{httpVerb} from './baseApi';

export default class EventApi {
    static getAllEvents(){
        return BaseApi.callService({
            method: httpVerb.GET,
            relativeUrl: '/news'
        });
    }

    static getEvent(slug){
        return BaseApi.callService({
            method: httpVerb.GET,
            data: {slug: slug},
            relativeUrl: '/news'
        });
    }

    static getLastEvents(){
        return BaseApi.callService({
            method: httpVerb.GET,
            relativeUrl: '/news/getlast3'
        });
    }
}

