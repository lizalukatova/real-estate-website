import houseDocsApi from '../api/houseDocsApi';

export const LOAD_HOUSE_DOCS_SUCCESS = 'LOAD_HOUSE_DOCS_SUCCESS';
export const CLEAR_HOUSE_DOCS_SUCCESS = 'CLEAR_HOUSE_DOCS_SUCCESS';

const initialStateHouseDocs = {};

export function houseDocsReducer(state = initialStateHouseDocs, action) {
    switch (action.type) {
        case LOAD_HOUSE_DOCS_SUCCESS:
            return action.houseDocs;
        case CLEAR_HOUSE_DOCS_SUCCESS:
            return initialStateHouseDocs;
        default:
            return state;
    }
}

function loadHouseDocsSuccess(houseDocs) {
    return {
        type: LOAD_HOUSE_DOCS_SUCCESS,
        houseDocs
    };
}

function clearHouseDocsSuccess() {
    return {
        type: CLEAR_HOUSE_DOCS_SUCCESS
    };
}

export function loadHouseDocs() {
    return dispatch => houseDocsApi.getAllHouseDocs()
        .then(data => dispatch(loadHouseDocsSuccess(data)))
        .catch(error => {
            throw (error);
        });
}

export function clearHouseDocs() {
    return dispatch => dispatch(clearHouseDocsSuccess());
}