import React from 'react';
import PropTypes from 'prop-types';

function DailyWeatherInfo({
    midday,
    data
}) {
    return (
        <div className="-app-weather-daily__daily-weather-info">
            <div className="-app-weather-daily__daily-weather-midday">
                {midday}
            </div>
            <div className="-app-weather-daily__daily-weather-data -app-weather-daily__daily-weather-data_grey">
                {data}
            </div>
        </div>
    );
}

DailyWeatherInfo.propTypes = {
    midday: PropTypes.string,
    data: PropTypes.string
}

export default React.memo(DailyWeatherInfo);