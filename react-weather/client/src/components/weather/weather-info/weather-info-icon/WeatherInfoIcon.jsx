import React from 'react';
import PropTypes from 'prop-types';

function WeatherInfoIcon(props) {
    const defaultWeatherInfoIconClassName = '-app-weather__info-icon';
    const weatherInfoIconClassList = [defaultWeatherInfoIconClassName];
    if (Boolean(props.classNameModificator)) {
        weatherInfoIconClassList.push(props.classNameModificator);
    }
    return (
        <img 
            className={weatherInfoIconClassList.join(' ')}
            src={`http://openweathermap.org/img/wn/${props.weatherIcon}@2x.png`} 
            alt={`weather-icon: http://openweathermap.org/img/wn/${props.weatherIcon}@2x.png`}/>
    );
}

WeatherInfoIcon.propTypes = {
    weatherIcon: PropTypes.string,
    classNameModificator: PropTypes.string
}

export default React.memo(WeatherInfoIcon);