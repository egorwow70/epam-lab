import React from 'react';
import PropTypes from 'prop-types';

function WeatherInfoDescriptionTitle(props) {
    return (
        <h4 className="-app-weather__info-title">
            {props.weatherDescription}
        </h4>
    );
}

WeatherInfoDescriptionTitle.propTypes = {
    weatherDescription: PropTypes.string
}

export default React.memo(WeatherInfoDescriptionTitle);