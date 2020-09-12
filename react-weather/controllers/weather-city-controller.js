const request = require('request');
const City = require('../models/city');
const Weather = require('../models/weather');
const SunriseAndSunset = require('../models/sunrise-and-sunset');
const Wind = require('../models/wind');
const CityWeather = require('../models/city-weather');

exports.city_weather = function (req, res) {
    var search_lat = `${req.params.lat}`;
    var search_lon = `${req.params.lon}`;
    var search_city_weather_url = `http://api.openweathermap.org/data/2.5/weather?lat=${search_lat}&lon=${search_lon}&appid=bbcb79559099018d2a420301545a26ed&lang=en`;
    
    request(search_city_weather_url, function (error, response, body) {
        var request_time = new Date();

        var city_weather_json;
        city_weather_json = JSON.parse(body);
        console.log('\x1b[41m%s\x1b[0m', 'REQUESTED CITY WEATHER JSON:');
        console.log(city_weather_json);
        
        var city_name = city_weather_json.name;
        var city_lon = city_weather_json.coord.lon;
        var city_lat = city_weather_json.coord.lat;
        var city = new City(
            city_name,
            city_lon,
            city_lat
        );

        var air_temperature = Math.round(city_weather_json.main.temp);
        var feels_like_air_temperature = Math.round(city_weather_json.main.feels_like);
        var weather_description = city_weather_json.weather[0].description;
        var weather_icon = city_weather_json.weather[0].icon;
        var pressure = city_weather_json.main.pressure;
        var humidity = city_weather_json.main.humidity;
        var weather = new Weather(
            air_temperature,
            feels_like_air_temperature,
            weather_description,
            weather_icon,
            pressure,
            humidity
        );

        var wind_speed = city_weather_json.wind.speed;
        var wind_deg = city_weather_json.wind.deg;
        var wind = new Wind(
            wind_speed,
            wind_deg
        );

        var clouds = city_weather_json.clouds.all;
      
        var sunrise = city_weather_json.sys.sunrise;
        var sunset = city_weather_json.sys.sunset;
        var sunrise_and_sunset = new SunriseAndSunset(
            sunrise,
            sunset
        );

        var city_weather = new CityWeather(
            request_time,
            city.getModel(),
            weather.getModel(),
            wind.getModel(),
            clouds,
            sunrise_and_sunset.getModel()
        );

        console.log('\x1b[41m%s\x1b[0m', 'CITY WEATHER DATA FOR DEV:');
        console.log(city_weather.getModel()); 
        res.send(city_weather.getModel());
    });
};