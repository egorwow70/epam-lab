import React from 'react';
import WeatherDaily from './WeatherDaily';
import { useSelector } from 'react-redux';
import { weatherFeatureKey } from '../../store/weather/weather.reducer';

function WeatherDailyContainer() {
    const dailyWeatherList = useSelector(state => state[weatherFeatureKey].dailyWeatherList);

    return (
        <div className="-app-weather-daily">
            <WeatherDaily
                dailyWeatherList={dailyWeatherList} />
        </div>
    )
}

export default React.memo(WeatherDailyContainer);