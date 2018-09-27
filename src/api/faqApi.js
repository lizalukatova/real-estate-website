import BaseApi,{httpVerb} from './baseApi';

export default class FaqApi {
    static getAllQuestions(){
        return BaseApi.callService({
            method: httpVerb.GET,
            relativeUrl: '/question'
        });
    }
}

