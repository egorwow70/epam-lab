module.exports = class CityWeather {
    constructor(
        cityName,
        airTemperature,
        weatherDescription,
        weatherIcon
    ) {
        this._cityName = cityName;
        this._airTemperature = airTemperature;
        this._weatherDescription = weatherDescription;
        this._weatherIcon = weatherIcon;
    }

    getModel() {
        return {
            cityName: this._cityName,
            airTemperature: this._airTemperature,
            weatherDescription: this._weatherDescription,
            weatherIcon: this._weatherIcon
        };
    }
}
