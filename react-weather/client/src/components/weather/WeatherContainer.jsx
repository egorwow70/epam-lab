import React from 'react';
import Weather from './Weather';
import { useSelector } from 'react-redux';
import { weatherFeatureKey } from '../../store/weather/weather.reducer';

function WeatherContainer() {
    const cityWeather = useSelector(state => state[weatherFeatureKey].cityWeather);
    const hourlyWeatherList = useSelector(state => state[weatherFeatureKey].hourlyWeatherList);

    return (
        <div className="-app-weather">
            <Weather
                cityWeather={cityWeather}
                hourlyWeatherList={hourlyWeatherList} />
        </div>
    )
}

export default React.memo(WeatherContainer);