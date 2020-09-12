import React from 'react';
import PropTypes from 'prop-types';

function WeatherHeaderTitle({
    cityName,
    cityLat,
    cityLon
}) {
    return (
        <h2 className="-app-weather__header-title">
            The weather in {cityName} (lat: {cityLat}, lon: {cityLon})
        </h2>
    );
}

WeatherHeaderTitle.propTypes = {
    cityName: PropTypes.string,
    cityLat: PropTypes.number,
    cityLon: PropTypes.number
}

export default React.memo(WeatherHeaderTitle);