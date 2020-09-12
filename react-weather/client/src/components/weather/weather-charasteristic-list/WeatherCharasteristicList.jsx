import React from 'react';
import WeatherCharasteristic from './weather-charasteristic/WeatherCharasteristic';
import PropTypes from 'prop-types';
import WeatherCharacteristicClassNames from '../../../models/weather/weather-charasteristic-class-names';

function WeatherCharasteristicList({cityWeather}) {
    const charasteristicList = [
        WeatherCharacteristicClassNames.WEATHER_WIND_CHARASTERISTIC_CLASS_NAME,
        WeatherCharacteristicClassNames.WEATHER_HUMIDITY_CHARASTERISTIC_CLASS_NAME,
        WeatherCharacteristicClassNames.WEATHER_CLOUDS_CHARASTERISTIC_CLASS_NAME,
        WeatherCharacteristicClassNames.WEATHER_PRESSURE_CHARASTERISTIC_CLASS_NAME,
    ];
    return (
        <ul className="-app-weather__charasteristic-list">
           {charasteristicList.map((charasteristic, index)=>{
               return <WeatherCharasteristic 
                cityWeather={cityWeather}
                className={charasteristic}
                key={index}/>
           })}
        </ul>
    );
}

WeatherCharasteristicList.propTypes = {
    cityWeather: PropTypes.object
}

export default React.memo(WeatherCharasteristicList);