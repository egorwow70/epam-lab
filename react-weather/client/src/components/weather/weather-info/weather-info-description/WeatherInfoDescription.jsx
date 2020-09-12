import React from 'react';
import WeatherInfoDescriptionTitle from './weather-info-description-title/WeatherInfoDescriptionTitle';
import WeatherInfoDescriptionSubtitle from './weather-info-description-subtitle/WeatherInfoDescriptionSubtitle';
import PropTypes from 'prop-types';

function WeatherInfoDescription({
    weatherDescription,
    feelsLikeAirTemperature
}) {
    return (
        <div className="-app-weather__info-description">
            <WeatherInfoDescriptionTitle weatherDescription={weatherDescription}/>
            <WeatherInfoDescriptionSubtitle feelsLikeAirTemperature={feelsLikeAirTemperature}/>
        </div>
    );
}

WeatherInfoDescription.propTypes = {
    weatherDescription: PropTypes.string,
    feelsLikeAirTemperature: PropTypes.string
}

export default React.memo(WeatherInfoDescription);