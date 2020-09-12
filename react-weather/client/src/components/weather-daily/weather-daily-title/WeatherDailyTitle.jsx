import React from 'react';

function WeatherDailyTitle() {
    return (
        <h2 className="-app-weather-daily__title">
            Forecast for 7 days
        </h2>
    );
}

export default React.memo(WeatherDailyTitle);