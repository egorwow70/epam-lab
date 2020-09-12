

import React from 'react';
import PropTypes from 'prop-types';

function WeatherInfoTemperature({airTemperature}) {
    return (
        <div className="-app-weather__info-temperature">
                {airTemperature}
        </div>
    );
}

WeatherInfoTemperature.propTypes = {
    airTemperature: PropTypes.string
}

export default React.memo(WeatherInfoTemperature);