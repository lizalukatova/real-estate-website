import BaseApi,{httpVerb} from './baseApi';

export default class HouseDocsApi {
    static getSeo(){
        return BaseApi.callService({
            method: httpVerb.GET,
            relativeUrl: '/seo',
			data:{
				url: window.location.pathname
			}
        });
    }
}

