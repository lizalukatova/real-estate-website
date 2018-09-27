import BaseApi,{httpVerb} from './baseApi';

class HouseApi{
    static getAllHouses(){
        return BaseApi.callService({
            method: httpVerb.GET,
            relativeUrl: '/house'
        });
    }

    static getHouse(slug){
        return BaseApi.callService({
            method: httpVerb.GET,
            data: {slug: slug},
            relativeUrl: '/house'
        });
    }
}

export default HouseApi;
