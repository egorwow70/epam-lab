import React from 'react';
import PropTypes from 'prop-types';

function HourlyWeatherButton({
    modificatorClassName,
    scrollFunc,
    isDisabled
}) {
    const defaultHourlyWeatherButtonClassName = '-app-weather__hourly-weather-button';
    let hourlyWeatherButtonClassList = [defaultHourlyWeatherButtonClassName];
    if (modificatorClassName === '-app-weather__hourly-weather-button_left') {
        hourlyWeatherButtonClassList.push('-app-weather__hourly-weather-button_left');
    } else {
        hourlyWeatherButtonClassList.push('-app-weather__hourly-weather-button_right');
    }
    return (
        <button
            className={hourlyWeatherButtonClassList.join(' ')}
            onClick={() => scrollFunc()}
            disabled={isDisabled}>
        </button>
    );
}

HourlyWeatherButton.propTypes = {
    modificatorClassName: PropTypes.string,
    scrollFunc: PropTypes.func,
    isDisabled: PropTypes.bool
}

export default React.memo(HourlyWeatherButton);