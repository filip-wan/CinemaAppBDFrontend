import { combineReducers } from 'redux';
import filmsReducer from './filmsReducer';
import filmReducer from './filmReducer';
import screeningsReducer from './screeningsReducer';

export default combineReducers({
    films: filmsReducer,
    film: filmReducer,
    screenings: screeningsReducer
});
