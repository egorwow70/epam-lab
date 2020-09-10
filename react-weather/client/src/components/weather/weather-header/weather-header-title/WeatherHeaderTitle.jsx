import React from 'react';
import PropTypes from 'prop-types';

function WeatherHeaderTitle(props) {
    return (
        <h2 className="-app-weather__header-title">
            The weather in {props.cityName} (lat: {props.cityLat}, lon: {props.cityLon})
        </h2>
    );
}

WeatherHeaderTitle.propTypes = {
    cityName: PropTypes.string,
    cityLat: PropTypes.number,
    cityLon: PropTypes.number
}

export default React.memo(WeatherHeaderTitle);