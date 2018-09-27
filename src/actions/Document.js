import documentApi from '../api/documentApi';

export const LOAD_DOCUMENTS_SUCCESS = 'LOAD_DOCUMENTS_SUCCESS';
export const CLEAR_DOCUMENTS_SUCCESS = 'CLEAR_DOCUMENTS_SUCCESS';

const initialStateDocuments = [];

export function documentsReducer(state = initialStateDocuments, action) {
    switch (action.type) {
        case LOAD_DOCUMENTS_SUCCESS:
            return action.documents;
        case CLEAR_DOCUMENTS_SUCCESS:
            return initialStateDocuments;
        default:
            return state;
    }
}

function loadDocumentsSuccess(documents) {
    return {
        type: LOAD_DOCUMENTS_SUCCESS,
        documents
    };
}

function clearDocumentsSuccess() {
    return {
        type: CLEAR_DOCUMENTS_SUCCESS
    };
}

export function loadDocuments() {
    return dispatch => documentApi.getAllDocuments()
        .then(data => dispatch(loadDocumentsSuccess(data)))
        .catch(error => {
            throw (error);
        });
}

export function clearDocuments() {
    return dispatch => dispatch(clearDocumentsSuccess());
}