import {
    weatherActionsType
} from './weather.actions';

export const IWeatherState = {
    isStartedSearchWeather: false,
    isLoadingCityWeather: true,
    isLoadingHourlyWeather: true,
    isLoadingDailyWeather: true,
    cityWeather: null,
    hourlyWeatherList: null,
    dailyWeatherList: null
};

export const weatherFeatureKey = 'WEATHER';

export const weatherReducer = (state = IWeatherState, action) => {
    switch (action.type) {
        case weatherActionsType.startSearchWeather: {
            return {
                ...state,
                isStartedSearchWeather: true
            };
        }
        case weatherActionsType.loadWeatherData: {
            return {
                ...state,
                cityWeather: {
                    ...action.cityWeather
                },
                isLoadingCityWeather: false
            };
        }
        case weatherActionsType.loadForecastWeatherData: {
            return (action.forecastType === 'hourly') ?
                {
                    ...state,
                    hourlyWeatherList: [...action.forecastWeatherData],
                    isLoadingHourlyWeather: false
                } : {
                    ...state,
                    dailyWeatherList: [...action.forecastWeatherData],
                    isLoadingDailyWeather: false
                }
        }
        default: {
            return {
                ...state
            };
        }
    }
}