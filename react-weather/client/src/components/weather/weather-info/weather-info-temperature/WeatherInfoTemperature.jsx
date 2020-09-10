

import React from 'react';
import PropTypes from 'prop-types';

function WeatherInfoTemperature(props) {
    return (
        <div className="-app-weather__info-temperature">
                {props.airTemperature}
        </div>
    );
}

WeatherInfoTemperature.propTypes = {
    airTemperature: PropTypes.string
}

export default React.memo(WeatherInfoTemperature);