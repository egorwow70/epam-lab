const request = require('request');
const CityWeather = require('../models/city-weather');

exports.city_weather = function (req, res) {
    var city_name = `${req.params.cityName}`;
    var search_city_weather_url = `http://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=bbcb79559099018d2a420301545a26ed`;
    var city_weather_json;

    request(search_city_weather_url, function (error, response, body) {
        city_weather_json = JSON.parse(body);
        console.log(city_weather_json);

        var city_air_temperature = Math.round(city_weather_json.main.temp);
        var city_weather_description = city_weather_json.weather[0].description;
        var city_weather_icon = city_weather_json.weather[0].icon;
        var city_weather = new CityWeather(
            city_name,
            city_air_temperature,
            city_weather_description,
            city_weather_icon
        );
        res.send(city_weather.getModel());
    });
};