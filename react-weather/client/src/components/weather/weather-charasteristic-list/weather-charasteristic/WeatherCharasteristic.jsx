import React from 'react';
import PropTypes from 'prop-types';
import WeatherCharacteristicClassNames from '../../../../models/weather/weather-charasteristic-class-names';

function WeatherCharasteristic({
    cityWeather,
    className
}) {
    const defaultWeatherCharacteristicClassName = WeatherCharacteristicClassNames.WEATHER_DEFAULT_CHARASTERISTIC_CLASS_NAME;
    let weatherCharasteristicClassList = [defaultWeatherCharacteristicClassName];
    weatherCharasteristicClassList.push(className);
    return (
        <li
            className={weatherCharasteristicClassList.join(' ')}>
            {className === WeatherCharacteristicClassNames.WEATHER_WIND_CHARASTERISTIC_CLASS_NAME &&
                <React.Fragment>
                    {cityWeather.wind.windSpeed}, {cityWeather.wind.windDeg}
                </React.Fragment>
            }
            {className === WeatherCharacteristicClassNames.WEATHER_HUMIDITY_CHARASTERISTIC_CLASS_NAME &&
                <React.Fragment>
                    {cityWeather.weather.humidity}
                </React.Fragment>
            }
            {className === WeatherCharacteristicClassNames.WEATHER_CLOUDS_CHARASTERISTIC_CLASS_NAME &&
                <React.Fragment>
                    {cityWeather.clouds}
                </React.Fragment>
            }
            {className === WeatherCharacteristicClassNames.WEATHER_PRESSURE_CHARASTERISTIC_CLASS_NAME &&
                <React.Fragment>
                    {cityWeather.weather.pressure}
                </React.Fragment>
            }
        </li>
    );
}

WeatherCharasteristic.propTypes = {
    cityWeather: PropTypes.object,
    className: PropTypes.string
}

export default React.memo(WeatherCharasteristic);