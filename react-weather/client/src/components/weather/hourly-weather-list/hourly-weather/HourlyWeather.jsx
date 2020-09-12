import React from 'react';
import PropTypes from 'prop-types';
import WeatherInfoIcon from '../../weather-info/weather-info-icon/WeatherInfoIcon';

function HourlyWeather({
    time,
    icon,
    airTemperature
}) {
    const weatherInfoIconClassNameModificator = '-app-weather__info-icon_hourly';
    return (
        <li className="-app-weather__hourly-weather">
            <div>
                {time}
            </div>
            <WeatherInfoIcon
                classNameModificator={weatherInfoIconClassNameModificator}
                weatherIcon={icon} />
            <div>
                {airTemperature}
            </div>
        </li>
    );
}

HourlyWeather.propTypes = {
    time: PropTypes.string,
    icon: PropTypes.string,
    airTemperature: PropTypes.string
}

export default React.memo(HourlyWeather);