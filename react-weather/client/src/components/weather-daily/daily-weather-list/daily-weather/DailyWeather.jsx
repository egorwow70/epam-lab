import React from 'react';
import PropTypes from 'prop-types';
import WeatherInfoIcon from '../../../weather/weather-info/weather-info-icon/WeatherInfoIcon';
import DailyWeatherSubinfo from './daily-weather-subinfo/DailyWeatherSubinfo';
import DailyWeatherInfo from './daily-weather-info/DailyWeatherInfo';

function DailyWeather({
    midday,
    data,
    icon,
    dayTemperature,
    nightTemperature,
    description
}) {
    return (
        <li className="-app-weather-daily__daily-weather">
            <DailyWeatherInfo 
                midday={midday}
                data={data}/>
            <WeatherInfoIcon
                classNameModificator={'-app-weather__info-icon_daily'}
                weatherIcon={icon}/>
            <DailyWeatherSubinfo 
                dayTemperature={dayTemperature}
                nightTemperature={nightTemperature}
                description={description}/>
        </li>
    );
}

DailyWeather.propTypes = {
    midday: PropTypes.string,
    data: PropTypes.string,
    dayTemperature: PropTypes.string,
    nightTemperature: PropTypes.string,
    icon: PropTypes.string,
    description: PropTypes.string,
}

export default React.memo(DailyWeather);