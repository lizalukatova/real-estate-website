import eventApi from '../api/eventApi';

export const LOAD_EVENTS_SUCCESS = 'LOAD_EVENTS_SUCCESS';
export const LOAD_LAST_EVENTS_SUCCESS = 'LOAD_LAST_EVENTS_SUCCESS';
export const CLEAR_EVENTS_SUCCESS = 'CLEAR_EVENTS_SUCCESS';
export const LOAD_EVENT_DETAILS_SUCCESS = 'LOAD_EVENT_DETAILS_SUCCESS';
export const CLEAR_EVENT_DETAILS_SUCCESS = 'CLEAR_EVENT_DETAILS_SUCCESS';

const initialStateEvents = [];
const initialStateEventDetail = {
    images: []
};

export function eventReducer(state = initialStateEvents, action) {
    switch (action.type) {
        case LOAD_EVENTS_SUCCESS:
            return action.events;
        case LOAD_LAST_EVENTS_SUCCESS:
            return action.events;
        case CLEAR_EVENTS_SUCCESS:
            return initialStateEvents;
        default:
            return state;
    }
}

export function eventDetailReducer(state = initialStateEventDetail, action) {
    switch (action.type) {
        case LOAD_EVENT_DETAILS_SUCCESS:
            return action.eventDetails;
        case CLEAR_EVENT_DETAILS_SUCCESS:
            return initialStateEventDetail;
        default:
            return state;
    }
}

function loadEventsSuccess(events) {
    return {
        type: LOAD_EVENTS_SUCCESS,
        events
    };
}

function loadLastEventsSuccess(events) {
    return {
        type: LOAD_LAST_EVENTS_SUCCESS,
        events
    };
}

function loadEventDetailsSuccess(eventDetails) {
    return {
        type: LOAD_EVENT_DETAILS_SUCCESS,
        eventDetails
    };
}

function clearEventsSuccess() {
    return {
        type: CLEAR_EVENTS_SUCCESS
    };
}

function clearEventDetailsSuccess() {
    return {
        type: CLEAR_EVENT_DETAILS_SUCCESS
    };
}

export function loadEvents() {
    return dispatch => eventApi.getAllEvents()
        .then(data => dispatch(loadEventsSuccess(data)))
        .catch(error => {
            throw (error);
        });
}

export function loadLastEvents() {
    return dispatch => eventApi.getLastEvents()
        .then(data => dispatch(loadLastEventsSuccess(data)))
        .catch(error => {
            throw (error);
        });
}

export function loadEventDetails(slug) {
    return dispatch => eventApi.getEvent(slug)
        .then(data => dispatch(loadEventDetailsSuccess(data)))
        .catch(error => {
            throw (error);
        });
}

export function clearEventDetails() {
    return dispatch => dispatch(clearEventDetailsSuccess());
}


export function clearEvents() {
    return dispatch => dispatch(clearEventsSuccess());
}