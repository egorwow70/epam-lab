import React from 'react';
import PropTypes from 'prop-types';
import WeatherDailyTitle from './weather-daily-title/WeatherDailyTitle';
import DailyWeatherList from './daily-weather-list/DailyWeatherList';

function WeatherDaily(props) {
    return (
        <div className="-app-weather-daily-wrapper">
            <WeatherDailyTitle />
            <DailyWeatherList dailyWeatherList={props.dailyWeatherList}/>
        </div>
    );
}

WeatherDaily.propTypes = {
    dailyWeatherList: PropTypes.array
}

export default React.memo(WeatherDaily);