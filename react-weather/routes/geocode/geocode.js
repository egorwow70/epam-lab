var express = require('express');
var router = express.Router();

var geocode_city_controller = require('../../controllers/geocode/geocode-city-controller');

router.get('/search-city/:cityName', geocode_city_controller.city_geocode);

module.exports = router;