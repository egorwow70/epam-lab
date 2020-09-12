import React from 'react';
import PropTypes from 'prop-types';

function WeatherSunInfo({sunriseAndSunset}) {
    return (
        <div className="-app-weather__sun-info">
            sunrise {sunriseAndSunset.sunrise}, sunset {sunriseAndSunset.sunset}
        </div>
    );
}

WeatherSunInfo.propTypes = {
    sunriseAndSunset: PropTypes.object
}

export default React.memo(WeatherSunInfo);