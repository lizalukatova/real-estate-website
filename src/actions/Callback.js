import callbackApi from '../api/callbackApi';

export const SEND_CALLBACK_SUCCESS = 'SEND_CALLBACK_SUCCESS';
export const CLEAR_CALLBACK_SUCCESS = 'CLEAR_CALLBACK_SUCCESS';

const initialStateCallback = {
    message: ""
};

export function callbackReducer(state = initialStateCallback, action) {
    switch (action.type) {
        case SEND_CALLBACK_SUCCESS:
            return action.message;
        case CLEAR_CALLBACK_SUCCESS:
            return initialStateCallback;
        default:
            return state;
    }
}

function sendCallbackSuccess(message) {
    return {
        type: SEND_CALLBACK_SUCCESS,
        message
    };
}

function clearCallbackSuccess() {
    return {
        type: CLEAR_CALLBACK_SUCCESS
    };
}

export function sendCallback(formData) {
    return dispatch => callbackApi.sendCallbackForm(formData)
        .then(data => dispatch(sendCallbackSuccess(data)))
        .catch(error => {
            throw (error);
        });
}

export function clearCallback() {
    return dispatch => dispatch(clearCallbackSuccess());
}
