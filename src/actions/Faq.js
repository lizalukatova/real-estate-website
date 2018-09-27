import faqApi from '../api/faqApi';

export const LOAD_FAQ_SUCCESS = 'LOAD_FAQ_SUCCESS';
export const CLEAR_FAQ_SUCCESS = 'CLEAR_FAQ_SUCCESS';

const initialStateFaq = [];

export function faqReducer(state = initialStateFaq, action) {
    switch (action.type) {
        case LOAD_FAQ_SUCCESS:
            return action.faq;
        case CLEAR_FAQ_SUCCESS:
            return initialStateFaq;
        default:
            return state;
    }
}

function loadFaqSuccess(faq) {
    return {
        type: LOAD_FAQ_SUCCESS,
        faq
    };
}

function clearFaqSuccess() {
    return {
        type: CLEAR_FAQ_SUCCESS
    };
}

export function loadFaq() {
    return dispatch => faqApi.getAllQuestions()
        .then(data => dispatch(loadFaqSuccess(data)))
        .catch(error => {
            throw (error);
        });
}

export function clearFaq() {
    return dispatch => dispatch(clearFaqSuccess());
}