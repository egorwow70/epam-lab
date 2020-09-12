import React from 'react';
import WeatherHeader from './weather-header/WeatherHeader';
import WeatherInfo from './weather-info/WeatherInfo';
import WeatherCharasteristicList from './weather-charasteristic-list/WeatherCharasteristicList';
import WeatherSunInfo from './weather-sun-info/WeatherSunInfo';
import PropTypes from 'prop-types';
import HourlyWeatherList from './hourly-weather-list/HourlyWeatherList';

function Weather({
    cityWeather,
    hourlyWeatherList
}) {
    return (
        <div className="-app-weather-wrapper">
            <WeatherHeader 
                requestTime={cityWeather.requestTime} 
                city={cityWeather.city}/>
            <WeatherInfo 
                weather={cityWeather.weather}/>
            <WeatherCharasteristicList cityWeather={cityWeather}/>
            <WeatherSunInfo sunriseAndSunset={cityWeather.sunriseAndSunset}/>
            <HourlyWeatherList hourlyWeatherList={hourlyWeatherList}/>
        </div>
    );
}

Weather.propTypes = {
    cityWeather: PropTypes.object,
    hourlyWeatherList: PropTypes.array
}

export default React.memo(Weather);