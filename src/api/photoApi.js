import BaseApi,{httpVerb} from './baseApi';

export default class HouseDocsApi {
    static getAllPhotos(){
        return BaseApi.callService({
            method: httpVerb.GET,
            relativeUrl: '/progress'
        });
    }
}

