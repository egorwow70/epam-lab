module.exports = class CityWeather {
    constructor(
        cityName,
        cityLon,
        cityLat
    ) {
        this._cityName = cityName;
        this._cityLon = cityLon;
        this._cityLat = cityLat;
    }

    getModel() {
        return {
            cityName: this._cityName,
            cityLon: this._cityLon,
            cityLat: this._cityLat
        };
    }
}