import {
    geocodeActionsType
} from './geocode.actions';

export const IGeocodeState = {
    searchCity: null
};

export const geocodeFeatureKey = 'GEOCODE';

export const geocodeReducer = (state = IGeocodeState, action) => {
    switch (action.type) {
        case geocodeActionsType.searchCity: {
            return {
                ...state,
                searchCity: {...action.currentCityCoordinates}
            };
        }
        case geocodeActionsType.endSeacrhCity: {
            return {
                ...state,
                searchCity: null
            };
        }
        default: {
            return {
                ...state
            };
        }
    }
}