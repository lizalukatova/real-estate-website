import offerApi from '../api/offerApi';

export const LOAD_OFFERS_SUCCESS = 'LOAD_OFFERS_SUCCESS';
export const CLEAR_OFFERS_SUCCESS = 'CLEAR_OFFERS_SUCCESS';
export const LOAD_OFFER_DETAILS_SUCCESS = 'LOAD_OFFER_DETAILS_SUCCESS';
export const CLEAR_OFFER_DETAILS_SUCCESS = 'CLEAR_OFFER_DETAILS_SUCCESS';
export const LOAD_LAST_OFFERS_SUCCESS = 'LOAD_LAST_OFFERS_SUCCESS';

const initialStateOffers = [];
const initialStateOfferDetail = {
    inside_img: []
};

export function offerReducer(state = initialStateOffers, action) {
    switch (action.type) {
        case LOAD_OFFERS_SUCCESS:
            return action.offers;
        case LOAD_LAST_OFFERS_SUCCESS:
            return action.offers;
        case CLEAR_OFFERS_SUCCESS:
            return initialStateOffers;
        default:
            return state;
    }
}

export function offerDetailReducer(state = initialStateOfferDetail, action) {
    switch (action.type) {
        case LOAD_OFFER_DETAILS_SUCCESS:
            return action.offerDetails;
        case CLEAR_OFFER_DETAILS_SUCCESS:
            return initialStateOfferDetail;
        default:
            return state;
    }
}

function loadOffersSuccess(offers) {
    return {
        type: LOAD_OFFERS_SUCCESS,
        offers
    };
}

function loadLastOffersSuccess(offers) {
    return {
        type: LOAD_LAST_OFFERS_SUCCESS,
        offers
    };
}

function loadOfferDetailsSuccess(offerDetails) {
    return {
        type: LOAD_OFFER_DETAILS_SUCCESS,
        offerDetails
    };
}

function clearOffersSuccess() {
    return {
        type: CLEAR_OFFERS_SUCCESS
    };
}

function clearOfferDetailsSuccess() {
    return {
        type: CLEAR_OFFER_DETAILS_SUCCESS
    };
}

export function loadOffers() {
    return dispatch => offerApi.getAllOffers()
        .then(data => dispatch(loadOffersSuccess(data)))
        .catch(error => {
            throw (error);
        });
}

export function loadLastOffers() {
    return dispatch => offerApi.getLastOffers()
        .then(data => dispatch(loadLastOffersSuccess(data)))
        .catch(error => {
            throw (error);
        });
}

export function loadOfferDetails(slug) {
    return dispatch => offerApi.getOffer(slug)
        .then(data => dispatch(loadOfferDetailsSuccess(data)))
        .catch(error => {
            throw (error);
        });
}

export function clearOfferDetails() {
    return dispatch => dispatch(clearOfferDetailsSuccess());
}


export function clearOffers() {
    return dispatch => dispatch(clearOffersSuccess());
}