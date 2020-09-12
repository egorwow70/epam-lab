import React from 'react';
import PropTypes from 'prop-types';

function WeatherInfoDescriptionTitle({weatherDescription}) {
    return (
        <h4 className="-app-weather__info-title">
            {weatherDescription}
        </h4>
    );
}

WeatherInfoDescriptionTitle.propTypes = {
    weatherDescription: PropTypes.string
}

export default React.memo(WeatherInfoDescriptionTitle);