import React from 'react';
import PropTypes from 'prop-types';
import WeatherInfoIcon from '../../../weather/weather-info/weather-info-icon/WeatherInfoIcon';
import DailyWeatherSubinfo from './daily-weather-subinfo/DailyWeatherSubinfo';
import DailyWeatherInfo from './daily-weather-info/DailyWeatherInfo';

function DailyWeather(props) {
    return (
        <li className="-app-weather-daily__daily-weather">
            <DailyWeatherInfo 
                midday={props.midday}
                data={props.data}/>
            <WeatherInfoIcon
                classNameModificator={'-app-weather__info-icon_daily'}
                weatherIcon={props.icon}/>
            <DailyWeatherSubinfo 
                dayTemperature={props.dayTemperature}
                nightTemperature={props.nightTemperature}
                description={props.description}/>
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