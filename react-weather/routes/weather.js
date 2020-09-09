var express = require('express');
var router = express.Router();

var weather_controller = require('../controllers/weather-controller');

router.get('/weather/:cityName', weather_controller.city_weather);

module.exports = router;
