import React from 'react';
import WeatherInfoDescription from './weather-info-description/WeatherInfoDescription';
import WeatherInfoIcon from './weather-info-icon/WeatherInfoIcon';
import WeatherInfoTemperature from './weather-info-temperature/WeatherInfoTemperature';
import PropTypes from 'prop-types';

function WeatherInfo(props) {
    return (
        <div className="-app-weather__info">
            <WeatherInfoTemperature airTemperature={props.weather.airTemperature} />
            <WeatherInfoIcon 
                weatherIcon={props.weather.weatherIcon}/>
            <WeatherInfoDescription
                weatherDescription={props.weather.weatherDescription}
                feelsLikeAirTemperature={props.weather.feelsLikeAirTemperature} />
        </div>
    );
}

WeatherInfo.propTypes = {
    weather: PropTypes.object
}

export default React.memo(WeatherInfo);
