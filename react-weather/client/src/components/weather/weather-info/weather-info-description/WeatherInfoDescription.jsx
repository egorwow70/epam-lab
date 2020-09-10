import React from 'react';
import WeatherInfoDescriptionTitle from './weather-info-description-title/WeatherInfoDescriptionTitle';
import WeatherInfoDescriptionSubtitle from './weather-info-description-subtitle/WeatherInfoDescriptionSubtitle';
import PropTypes from 'prop-types';

function WeatherInfoDescription(props) {
    return (
        <div className="-app-weather__info-description">
            <WeatherInfoDescriptionTitle weatherDescription={props.weatherDescription}/>
            <WeatherInfoDescriptionSubtitle feelsLikeAirTemperature={props.feelsLikeAirTemperature}/>
        </div>
    );
}

WeatherInfoDescription.propTypes = {
    weatherDescription: PropTypes.string,
    feelsLikeAirTemperature: PropTypes.string
}

export default React.memo(WeatherInfoDescription);