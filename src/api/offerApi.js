import BaseApi,{httpVerb} from './baseApi';

export default class OfferApi {
    static getAllOffers(){
        return BaseApi.callService({
            method: httpVerb.GET,
            relativeUrl: '/offer/getoffers'
        });
    }

    static getLastOffers(){
        return BaseApi.callService({
            method: httpVerb.GET,
            relativeUrl: '/offer/slider'
        });
    }

    static getOffer(slug){
        return BaseApi.callService({
            method: httpVerb.GET,
            data: {slug: slug},
            relativeUrl: '/offer'
        });
    }
}

