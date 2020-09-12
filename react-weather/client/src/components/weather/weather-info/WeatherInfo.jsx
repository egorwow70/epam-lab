import React from 'react';
import WeatherInfoDescription from './weather-info-description/WeatherInfoDescription';
import WeatherInfoIcon from './weather-info-icon/WeatherInfoIcon';
import WeatherInfoTemperature from './weather-info-temperature/WeatherInfoTemperature';
import PropTypes from 'prop-types';

function WeatherInfo({weather}) {
    return (
        <div className="-app-weather__info">
            <WeatherInfoTemperature airTemperature={weather.airTemperature} />
            <WeatherInfoIcon 
                weatherIcon={weather.weatherIcon}/>
            <WeatherInfoDescription
                weatherDescription={weather.weatherDescription}
                feelsLikeAirTemperature={weather.feelsLikeAirTemperature} />
        </div>
    );
}

WeatherInfo.propTypes = {
    weather: PropTypes.object
}

export default React.memo(WeatherInfo);
