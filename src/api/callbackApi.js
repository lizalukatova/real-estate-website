import BaseApi,{httpVerb} from './baseApi';

export default class HouseDocsApi {
    static sendCallbackForm(data){
        return BaseApi.callService({
            method: httpVerb.POST,
            data: data,
            relativeUrl: '/callback/create'
        });
    }
}

