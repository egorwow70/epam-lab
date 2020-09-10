import React from 'react';
import PropTypes from 'prop-types';

function WeatherHeaderSubtitle(props) {
    return (
        <h3 className="-app-weather__header-subtitle">
            <span className="-app-weather__header-subtitle_left-side">
                Now
                </span>
            {props.requestTime}
        </h3>
    );
}

WeatherHeaderSubtitle.propTypes = {
    requestTime: PropTypes.string
}

export default React.memo(WeatherHeaderSubtitle);