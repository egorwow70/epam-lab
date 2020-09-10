import React from 'react';
import PropTypes from 'prop-types';

function DailyWeatherSubinfo(props) {
    return (
        <div className="-app-weather-daily__daily-weather-subinfo">
            <div  className="-app-weather-daily__daily-weather-dtemperature">
                Day {props.dayTemperature}
            </div>
            <div  className="-app-weather-daily__daily-weather-ntemperature -app-weather-daily__daily-weather-ntemperature_grey">
                Night {props.nightTemperature}
            </div>
            <div  className="-app-weather-daily__daily-weather-description -app-weather-daily__daily-weather-description_grey">
                {props.description}
            </div>
        </div>
    );
}

DailyWeatherSubinfo.propTypes = {
    dayTemperature: PropTypes.string,
    nightTemperature: PropTypes.string,
    description: PropTypes.string,
}

export default React.memo(DailyWeatherSubinfo);