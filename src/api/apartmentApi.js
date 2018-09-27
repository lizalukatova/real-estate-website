import BaseApi,{httpVerb} from './baseApi';

export default class HouseDocsApi {
    static getAllApartments(){
        return BaseApi.callService({
            method: httpVerb.GET,
            relativeUrl: '/apartment'
        });
    }

    static getApartment(slug){
        return BaseApi.callService({
            method: httpVerb.GET,
            data: {slug: slug},
            relativeUrl: '/apartment'
        });
    }
}

