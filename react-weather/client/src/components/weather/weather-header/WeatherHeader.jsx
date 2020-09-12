import React from 'react';
import WeatherHeaderTitle from './weather-header-title/WeatherHeaderTitle'
import WeatherHeaderSubtitle from './weather-header-subtitle/WeatherHeaderSubtitle';
import PropTypes from 'prop-types';

function WeatherHeader({
    city,
    requestTime
}) {
    return (
        <div className="-app-weather__header">
            <WeatherHeaderTitle 
                cityName={city.cityName}
                cityLat={city.cityLat}
                cityLon={city.cityLon}/>
            <WeatherHeaderSubtitle requestTime={requestTime}/>
        </div>
    );
}

WeatherHeader.propTypes = {
    city: PropTypes.object,
    requestTime: PropTypes.string
}

export default React.memo(WeatherHeader);
