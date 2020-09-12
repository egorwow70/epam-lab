import { combineReducers } from "redux";
import { weatherReducer, weatherFeatureKey } from './weather/weather.reducer';
import { geocodeReducer, geocodeFeatureKey } from './geocode/geocode.reducer';

export * from './weather';
export * from './geocode';

export const reducers = combineReducers({
    [weatherFeatureKey]: weatherReducer,
    [geocodeFeatureKey]: geocodeReducer
});