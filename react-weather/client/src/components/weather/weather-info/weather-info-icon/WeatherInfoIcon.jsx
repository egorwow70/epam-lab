import React from 'react';
import PropTypes from 'prop-types';

function WeatherInfoIcon({
    classNameModificator,
    weatherIcon
}) {
    const defaultWeatherInfoIconClassName = '-app-weather__info-icon';
    const weatherInfoIconClassList = [defaultWeatherInfoIconClassName];
    if (Boolean(classNameModificator)) {
        weatherInfoIconClassList.push(classNameModificator);
    }
    return (
        <img 
            className={weatherInfoIconClassList.join(' ')}
            src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`} 
            alt={`weather-icon: http://openweathermap.org/img/wn/${weatherIcon}@2x.png`}/>
    );
}

WeatherInfoIcon.propTypes = {
    weatherIcon: PropTypes.string,
    classNameModificator: PropTypes.string
}

export default React.memo(WeatherInfoIcon);