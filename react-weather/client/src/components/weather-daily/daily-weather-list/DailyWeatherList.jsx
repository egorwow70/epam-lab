
import React from 'react';
import PropTypes from 'prop-types';
import DailyWeather from './daily-weather/DailyWeather';

function DailyWeatherList({dailyWeatherList}) {
    return (
        <ul className="-app-weather-daily__daily-weather-list">
            {dailyWeatherList.map((dailyWeather, index) => {
                return <DailyWeather
                    data={dailyWeather.data}
                    midday={dailyWeather.midday}
                    dayTemperature={dailyWeather.dayTemperature}
                    nightTemperature={dailyWeather.nightTemperature}
                    description={dailyWeather.description}
                    icon={dailyWeather.icon}
                    key={index} />
            })}
        </ul>
    );
}

DailyWeatherList.propTypes = {
    dailyWeatherList: PropTypes.array
}

export default React.memo(DailyWeatherList);