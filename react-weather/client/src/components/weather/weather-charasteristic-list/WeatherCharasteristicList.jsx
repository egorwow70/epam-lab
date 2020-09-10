import React from 'react';
import WeatherCharasteristic from './weather-charasteristic/WeatherCharasteristic';
import PropTypes from 'prop-types';
import WeatherCharacteristicClassNames from '../../../models/weather-charasteristic-class-names';

function WeatherCharasteristicList(props) {
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
                cityWeather={props.cityWeather}
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