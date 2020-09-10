import React from 'react';
import WeatherHeader from './weather-header/WeatherHeader';
import WeatherInfo from './weather-info/WeatherInfo';
import WeatherCharasteristicList from './weather-charasteristic-list/WeatherCharasteristicList';
import WeatherSunInfo from './weather-sun-info/WeatherSunInfo';
import PropTypes from 'prop-types';
import HourlyWeatherList from './hourly-weather-list/HourlyWeatherList';

function Weather(props) {
    return (
        <div className="-app-weather-wrapper">
            <WeatherHeader 
                requestTime={props.cityWeather.requestTime} 
                city={props.cityWeather.city}/>
            <WeatherInfo 
                weather={props.cityWeather.weather}/>
            <WeatherCharasteristicList cityWeather={props.cityWeather}/>
            <WeatherSunInfo sunriseAndSunset={props.cityWeather.sunriseAndSunset}/>
            <HourlyWeatherList hourlyWeatherList={props.hourlyWeatherList}/>
        </div>
    );
}

Weather.propTypes = {
    cityWeather: PropTypes.object,
    hourlyWeatherList: PropTypes.array
}

export default React.memo(Weather);