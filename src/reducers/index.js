import {combineReducers} from 'redux';
import { houseReducer as houses, houseDetailReducer as house } from '../actions/House';
import { offerReducer as offers, offerDetailReducer as offer } from '../actions/Offer';
import { eventReducer as events, eventDetailReducer as event } from '../actions/Event';
import { apartmentReducer as apartments, apartmentDetailReducer as apartment } from '../actions/Apartment';
import { houseDocsReducer as houseDocs } from '../actions/HouseDoc';
import { documentsReducer as documents } from '../actions/Document';
import { photosReducer as photos } from '../actions/Photo';
import { faqReducer as faq } from '../actions/Faq';
import { callbackReducer as message } from '../actions/Callback';
import { seoReducer as seo } from '../actions/Seo';

const rootReducer = combineReducers({
    houses,
    house,
    offers,
    offer,
    events,
    event,
    apartments,
    apartment,
    houseDocs,
    documents,
    faq,
    photos,
    message,
	seo
});

export default rootReducer;