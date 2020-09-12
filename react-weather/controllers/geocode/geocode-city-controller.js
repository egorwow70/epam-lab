const request = require('request');
const CityGeocode = require('../../models/geocode/city-geocode');

exports.city_geocode = function (req, res) {
    var search_city = `${req.params.cityName}`;
    var search_city_geocode_url = `https://geocode-maps.yandex.ru/1.x/?format=json&apikey=cf12cc60-e991-460b-8057-553e3de62bf8&geocode=${search_city}`;
    
    request(search_city_geocode_url, function (error, response, body) {
        var city_geocode_json;
        city_geocode_json = JSON.parse(body);
        console.log('\x1b[41m%s\x1b[0m', 'REQUESTED CITY WEATHER JSON:');
        console.log(city_geocode_json);

        var geocode_repsonse = city_geocode_json.response;
        var geocode_object_collection = geocode_repsonse.GeoObjectCollection;
        var geocode_object_collection_member = geocode_object_collection.featureMember[0];
        var geocode_object_location = geocode_object_collection_member.GeoObject.Point.pos;
        
        var city_geocode = new CityGeocode(geocode_object_location);

        console.log('\x1b[41m%s\x1b[0m', 'CITY WEATHER DATA FOR DEV:');
        console.log(city_geocode.getModel()); 
        res.send(city_geocode.getModel());
    });
};