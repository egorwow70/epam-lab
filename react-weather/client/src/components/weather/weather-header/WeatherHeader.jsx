import React from 'react';
import WeatherHeaderTitle from './weather-header-title/WeatherHeaderTitle'
import WeatherHeaderSubtitle from './weather-header-subtitle/WeatherHeaderSubtitle';
import PropTypes from 'prop-types';

function WeatherHeader(props) {
    return (
        <div className="-app-weather__header">
            <WeatherHeaderTitle 
                cityName={props.city.cityName}
                cityLat={props.city.cityLat}
                cityLon={props.city.cityLon}/>
            <WeatherHeaderSubtitle requestTime={props.requestTime}/>
        </div>
    );
}

WeatherHeader.propTypes = {
    city: PropTypes.object,
    requestTime: PropTypes.string
}

export default React.memo(WeatherHeader);
