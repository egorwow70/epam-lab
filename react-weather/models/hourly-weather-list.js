const HourlyWeather = require('./hourly-weather');

module.exports = class HourlyWeatherList {
    constructor(
        hourlyWeatherList
    ) {
        this._hourlyWeatherList = this.transfromHourlyWeatherList(hourlyWeatherList);
    }

    transfromHourlyWeatherList(hourlyWeatherList) {
        return hourlyWeatherList.map(hourlyWeather => {
            return new HourlyWeather(
                hourlyWeather.dt,
                hourlyWeather.temp,
                hourlyWeather.weather[0].icon
            ).getModel();
        });
    }

    getModel() {
        return [...this._hourlyWeatherList];
    }
}