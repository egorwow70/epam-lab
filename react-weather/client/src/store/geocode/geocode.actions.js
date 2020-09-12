import GeocodeApi from '../../models/apis/geocode-api';

export const geocodeActionsType = {
    searchCity: '[GEOCODE/API] Search-City GECODE',
    endSeacrhCity: '[GEOCODE/API] End-Search-City GECODE',
}

export function SearchCityAction({cityName}) {
    return async dispatch => {
        const currentCityCoordinates = await GeocodeApi.searchCityGeocodeApi(cityName).then(currentCityData => currentCityData);
        dispatch({
            type: geocodeActionsType.searchCity,
            currentCityCoordinates
        });
    }
}

export function EndSeacrhCityAction() {
    return {
       type: geocodeActionsType.endSeacrhCity
    }
}

