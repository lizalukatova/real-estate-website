import photoApi from '../api/photoApi';

export const LOAD_PHOTOS_SUCCESS = 'LOAD_PHOTOS_SUCCESS';
export const CLEAR_PHOTOS_SUCCESS = 'CLEAR_PHOTOS_SUCCESS';

const initialStatePhotos = {};

export function photosReducer(state = initialStatePhotos, action) {
    switch (action.type) {
        case LOAD_PHOTOS_SUCCESS:
            return action.photos;
        case CLEAR_PHOTOS_SUCCESS:
            return initialStatePhotos;
        default:
            return state;
    }
}

function loadPhotosSuccess(photos) {
    return {
        type: LOAD_PHOTOS_SUCCESS,
        photos
    };
}

function clearPhotosSuccess() {
    return {
        type: CLEAR_PHOTOS_SUCCESS
    };
}

export function loadPhotos() {
    return dispatch => photoApi.getAllPhotos()
        .then(data => dispatch(loadPhotosSuccess(data)))
        .catch(error => {
            throw (error);
        });
}

export function clearPhotos() {
    return dispatch => dispatch(clearPhotosSuccess());
}