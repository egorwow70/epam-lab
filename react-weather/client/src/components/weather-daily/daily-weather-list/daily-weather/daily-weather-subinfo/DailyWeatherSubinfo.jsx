import React from 'react';
import PropTypes from 'prop-types';

function DailyWeatherSubinfo({
    dayTemperature,
    nightTemperature,
    description
}) {
    return (
        <div className="-app-weather-daily__daily-weather-subinfo">
            <div  className="-app-weather-daily__daily-weather-dtemperature">
                Day {dayTemperature}
            </div>
            <div  className="-app-weather-daily__daily-weather-ntemperature -app-weather-daily__daily-weather-ntemperature_grey">
                Night {nightTemperature}
            </div>
            <div  className="-app-weather-daily__daily-weather-description -app-weather-daily__daily-weather-description_grey">
                {description}
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