import WeatherApi from '../../models/apis/weather-api';

export const weatherActionsType = {
    startSearchWeather: '[WEATHER/API] Start-Search-Weather WEATHER',
    loadWeatherData: '[WEATHER/API] Load-Weather-Data WEATHER',
    loadForecastWeatherData: '[WEATHER/API] Load-Forecast-Weather-Data WEATHER',
    endSearchWeather: '[WEATHER/API] End-Search-Weather WEATHER'
}

export function StartSearchWeatherAction() {
    return {
       type: weatherActionsType.startSearchWeather
    }
}

export function LoadWeatherDataAction({cityLat, cityLon}) {
    return async dispatch => {
        const currentWeatherData = await WeatherApi.getCityWeatherApi(cityLat, cityLon).then(currentWeatherData => currentWeatherData);
        dispatch({
            type: weatherActionsType.loadWeatherData,
            cityWeather: currentWeatherData
        });
    }
}

export function LoadForecastWeatherDataAction({forecastType, cityLat, cityLon}) {
    return async dispatch => {
        const forecastWeatherData = await WeatherApi.getOneCallWeatherApi(forecastType, cityLat, cityLon).then(currentWeatherData => currentWeatherData);
        dispatch({
            type: weatherActionsType.loadForecastWeatherData,
            forecastType,
            forecastWeatherData: forecastWeatherData
        });
    }
}
