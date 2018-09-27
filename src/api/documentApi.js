import BaseApi,{httpVerb} from './baseApi';

export default class HouseDocsApi {
    static getAllDocuments(){
        return BaseApi.callService({
            method: httpVerb.GET,
            relativeUrl: '/uk'
        });
    }
}

