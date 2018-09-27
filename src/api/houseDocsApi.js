import BaseApi,{httpVerb} from './baseApi';

export default class HouseDocsApi {
    static getAllHouseDocs(){
        return BaseApi.callService({
            method: httpVerb.GET,
            relativeUrl: '/developer'
        });
    }
}

