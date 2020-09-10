import React from 'react';
import PropTypes from 'prop-types';

function WeatherSunInfo(props) {
    return (
        <div className="-app-weather__sun-info">
            sunrise {props.sunriseAndSunset.sunrise}, sunset {props.sunriseAndSunset.sunset}
        </div>
    );
}

WeatherSunInfo.propTypes = {
    sunriseAndSunset: PropTypes.object
}

export default React.memo(WeatherSunInfo);