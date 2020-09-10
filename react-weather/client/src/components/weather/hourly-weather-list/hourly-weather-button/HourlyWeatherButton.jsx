import React from 'react';
import PropTypes from 'prop-types';

function HourlyWeatherButton(props) {
    const defaultHourlyWeatherButtonClassName = '-app-weather__hourly-weather-button';
    let hourlyWeatherButtonClassList = [defaultHourlyWeatherButtonClassName];
    if (props.modificatorClassName === '-app-weather__hourly-weather-button_left') {
        hourlyWeatherButtonClassList.push('-app-weather__hourly-weather-button_left');
    } else {
        hourlyWeatherButtonClassList.push('-app-weather__hourly-weather-button_right');
    }
    return (
        <button
            className={hourlyWeatherButtonClassList.join(' ')}
            onClick={() => props.scrollFunc()}
            disabled={props.isDisabled}>
        </button>
    );
}

HourlyWeatherButton.propTypes = {
    modificatorClassName: PropTypes.string,
    scrollFunc: PropTypes.func,
    isDisabled: PropTypes.bool
}

export default React.memo(HourlyWeatherButton);