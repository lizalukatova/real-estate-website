import apartmentApi from '../api/apartmentApi';

export const LOAD_APARTMENTS_SUCCESS = 'LOAD_APARTMENTS_SUCCESS';
export const CLEAR_APARTMENTS_SUCCESS = 'CLEAR_APARTMENTS_SUCCESS';
export const LOAD_APARTMENT_DETAILS_SUCCESS = 'LOAD_APARTMENT_DETAILS_SUCCESS';
export const CLEAR_APARTMENT_DETAILS_SUCCESS = 'CLEAR_APARTMENT_DETAILS_SUCCESS';

const initialStateApartments = [];
const initialStateApartmentDetail = {
    plans: [],
    interior: []
};

export function apartmentReducer(state = initialStateApartments, action) {
    switch (action.type) {
        case LOAD_APARTMENTS_SUCCESS:
            return action.apartments;
        case CLEAR_APARTMENTS_SUCCESS:
            return initialStateApartments;
        default:
            return state;
    }
}

export function apartmentDetailReducer(state = initialStateApartmentDetail, action) {
    switch (action.type) {
        case LOAD_APARTMENT_DETAILS_SUCCESS:
            return action.apartmentDetails;
        case CLEAR_APARTMENT_DETAILS_SUCCESS:
            return initialStateApartmentDetail;
        default:
            return state;
    }
}

function loadApartmentsSuccess(apartments) {
    return {
        type: LOAD_APARTMENTS_SUCCESS,
        apartments
    };
}


function loadApartmentDetailsSuccess(apartmentDetails) {
    return {
        type: LOAD_APARTMENT_DETAILS_SUCCESS,
        apartmentDetails
    };
}

function clearApartmentsSuccess() {
    return {
        type: CLEAR_APARTMENTS_SUCCESS
    };
}

function clearApartmentDetailsSuccess() {
    return {
        type: CLEAR_APARTMENT_DETAILS_SUCCESS
    };
}

export function loadApartments() {
    return dispatch => apartmentApi.getAllApartments()
        .then(data => dispatch(loadApartmentsSuccess(data)))
        .catch(error => {
            throw (error);
        });
}

export function loadApartmentDetails(slug) {
    return dispatch => apartmentApi.getApartment(slug)
        .then(data => dispatch(loadApartmentDetailsSuccess(data)))
        .catch(error => {
            throw (error);
        });
}

export function clearApartmentDetails() {
    return dispatch => dispatch(clearApartmentDetailsSuccess());
}


export function clearApartments() {
    return dispatch => dispatch(clearApartmentsSuccess());
}