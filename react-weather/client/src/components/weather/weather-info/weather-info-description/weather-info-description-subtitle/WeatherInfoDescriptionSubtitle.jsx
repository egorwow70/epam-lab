import React from 'react';
import PropTypes from 'prop-types';

function WeatherInfoDescriptionSubtitle(props) {
    return (
        <h4 className="-app-weather__info-subtitle">
            <span className="-app-weather__info-subtitle_grey">
                Feels like
                    </span>
            {props.feelsLikeAirTemperature}
        </h4>
    );
}

WeatherInfoDescriptionSubtitle.propTypes = {
    feelsLikeAirTemperature: PropTypes.string
}

export default React.memo(WeatherInfoDescriptionSubtitle);