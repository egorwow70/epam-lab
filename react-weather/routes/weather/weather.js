var express = require('express');
var router = express.Router();

var weather_city_controller = require('../../controllers/weather/weather-city-controller');
var weather_one_call_controller = require('../../controllers/weather/weather-one-call-controller');

router.get('/weather/:lat/:lon', weather_city_controller.city_weather);
router.get('/one-call/:forecast/:lat/:lon', weather_one_call_controller.one_call_weather);

module.exports = router;
