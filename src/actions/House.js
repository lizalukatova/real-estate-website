import houseApi from '../api/houseApi';

export const LOAD_HOUSES_SUCCESS = 'LOAD_HOUSES_SUCCESS';
export const CLEAR_HOUSES_SUCCESS = 'CLEAR_HOUSES_SUCCESS';
export const LOAD_HOUSE_DETAILS_SUCCESS = 'LOAD_HOUSE_DETAILS_SUCCESS';
export const CLEAR_HOUSE_DETAILS_SUCCESS = 'CLEAR_HOUSE_DETAILS_SUCCESS';

const initialStateHouses = [];
const initialStateHouseDetail = {
    slider_img: []
};

export function houseReducer(state = initialStateHouses, action) {
    switch (action.type) {
        case LOAD_HOUSES_SUCCESS:
            return action.houses;
        case CLEAR_HOUSES_SUCCESS:
            return initialStateHouses;
        default:
            return state;
    }
}

export function houseDetailReducer(state = initialStateHouseDetail, action) {
    switch (action.type) {
        case LOAD_HOUSE_DETAILS_SUCCESS:
            return action.houseDetails;
        case CLEAR_HOUSE_DETAILS_SUCCESS:
            return initialStateHouseDetail;
        default:
            return state;
    }
}

function loadHousesSuccess(houses) {
    return {
        type: LOAD_HOUSES_SUCCESS,
        houses
    };
}


function loadHouseDetailsSuccess(houseDetails) {
    return {
        type: LOAD_HOUSE_DETAILS_SUCCESS,
        houseDetails
    };
}

function clearHousesSuccess() {
    return {
        type: CLEAR_HOUSES_SUCCESS
    };
}

function clearHouseDetailsSuccess() {
    return {
        type: CLEAR_HOUSE_DETAILS_SUCCESS
    };
}

export function loadHouses() {
    return dispatch => houseApi.getAllHouses()
        .then(data => dispatch(loadHousesSuccess(data)))
        .catch(error => {
            throw (error);
        });
}

export function loadHouseDetails(slug) {
    return dispatch => houseApi.getHouse(slug)
        .then(data => dispatch(loadHouseDetailsSuccess(data)))
        .catch(error => {
            throw (error);
        });
}

export function clearHouseDetails() {
    return dispatch => dispatch(clearHouseDetailsSuccess());
}


export function clearHouses() {
    return dispatch => dispatch(clearHousesSuccess());
}