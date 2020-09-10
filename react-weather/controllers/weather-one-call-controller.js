const request = require('request');
const HourlyWeatherList = require('../models/hourly-weather-list');
const DailyWeatherList = require('../models/daily-weather-list');
const Forecast = require('../models/forecast');

exports.one_call_weather = function (req, res) {
    var search_forecast = `${req.params.forecast}`;
    var exclude_forecasts = Forecast.getExcludeForecasts(search_forecast);
    var search_lat = `${req.params.lat}`;
    var search_lon = `${req.params.lon}`;
    
    var search_one_call_weather_url = `https://api.openweathermap.org/data/2.5/onecall?lat=${search_lat}&lon=${search_lon}&exclude=${exclude_forecasts}&appid=454040fdd8ba2e48f3499d74539b8b7a&lang=en`;
    
    request(search_one_call_weather_url, function (error, response, body) {
        var one_call_weather_json;
        one_call_weather_json = JSON.parse(body);
        console.log('\x1b[41m%s\x1b[0m', 'REQUESTED HOURLY WEATHER JSON:');
        console.log(one_call_weather_json);

        var hourly_forecast_type = Forecast.forecastList[2];
        var daily_forecast_type = Forecast.forecastList[3];

        var weather_list;
        if (hourly_forecast_type === search_forecast) {
            weather_list = new HourlyWeatherList(one_call_weather_json.hourly);
        } 
        if (daily_forecast_type === search_forecast) {
            weather_list = new DailyWeatherList(one_call_weather_json.daily);
        } 
        console.log('\x1b[41m%s\x1b[0m', 'HOURLY WEATHER DATA FOR DEV:');
        console.log(weather_list.getModel());
        res.send(weather_list.getModel());
    });
};