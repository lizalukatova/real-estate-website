import seoApi from '../api/seoApi';

export const LOAD_SEO_SUCCESS = 'LOAD_SEO_SUCCESS';
export const CLEAR_SEO_SUCCESS = 'CLEAR_SEO_SUCCESS';

const initialStateSeo = {};

export function seoReducer(state = initialStateSeo, action) {
    switch (action.type) {
        case LOAD_SEO_SUCCESS:
            return action.seo;
        case CLEAR_SEO_SUCCESS:
            return initialStateSeo;
        default:
            return state;
    }
}

function loadSeoSuccess(seo) {
    return {
        type: LOAD_SEO_SUCCESS,
        seo
    };
}

function clearSeoSuccess() {
    return {
        type: CLEAR_SEO_SUCCESS
    };
}

export function loadSeo() {
    return dispatch => seoApi.getSeo()
        .then(data => dispatch(loadSeoSuccess(data)))
        .catch(error => {
            throw (error);
        });
}

export function clearSeo() {
    return dispatch => dispatch(clearSeoSuccess());
}