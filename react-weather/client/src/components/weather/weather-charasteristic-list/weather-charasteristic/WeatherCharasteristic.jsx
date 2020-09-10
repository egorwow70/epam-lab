import React from 'react';
import PropTypes from 'prop-types';
import WeatherCharacteristicClassNames from '../../../../models/weather-charasteristic-class-names';

function WeatherCharasteristic(props) {
    const defaultWeatherCharacteristicClassName = WeatherCharacteristicClassNames.WEATHER_DEFAULT_CHARASTERISTIC_CLASS_NAME;
    let weatherCharasteristicClassList = [defaultWeatherCharacteristicClassName];
    weatherCharasteristicClassList.push(props.className);
    return (
        <li
            className={weatherCharasteristicClassList.join(' ')}>
            {props.className === WeatherCharacteristicClassNames.WEATHER_WIND_CHARASTERISTIC_CLASS_NAME &&
                <React.Fragment>
                    {props.cityWeather.wind.windSpeed}, {props.cityWeather.wind.windDeg}
                </React.Fragment>
            }
            {props.className === WeatherCharacteristicClassNames.WEATHER_HUMIDITY_CHARASTERISTIC_CLASS_NAME &&
                <React.Fragment>
                    {props.cityWeather.weather.humidity}
                </React.Fragment>
            }
            {props.className === WeatherCharacteristicClassNames.WEATHER_CLOUDS_CHARASTERISTIC_CLASS_NAME &&
                <React.Fragment>
                    {props.cityWeather.clouds}
                </React.Fragment>
            }
            {props.className === WeatherCharacteristicClassNames.WEATHER_PRESSURE_CHARASTERISTIC_CLASS_NAME &&
                <React.Fragment>
                    {props.cityWeather.weather.pressure}
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