const Temperature = require('../temperature/temperature');

module.exports = class CityWeather {
    constructor(
        requestTime,
        city,
        weather,
        wind,
        clouds,
        sunriseAndSunset
    ) {
        this._requestTime = this.getRequestTimeString(requestTime);
        this._city = city;
        this._weather = weather;
        this._wind = wind;
        this._clouds = this.getCloudsString(clouds);
        this._sunriseAndSunset = sunriseAndSunset;

        this.transformTemperatures();
    }

    getCloudsString(clouds) {
        return `${clouds}%`;
    }

    checkTimeNumberZeros(timeNumber) {
        const ten = 10;
        return (timeNumber < ten) ?
            '0' + timeNumber :
            timeNumber;
    }

    getHoursDiapason(hours) {
        const decimalNumberSystem = 10;
        const twelveOclock = 12;
        let currentHours = (typeof hours === 'string') ?
            parseInt(hours, decimalNumberSystem) :
            hours;
        return (currentHours > twelveOclock) ?
            'p.m.' :
            'a.m.'
    }

    getRequestTimeString(requestTime) {
        const requestTimeHours = this.checkTimeNumberZeros(requestTime.getHours());
        const requestTimeMinutes = this.checkTimeNumberZeros(requestTime.getMinutes());
        const getHoursDiapason = this.getHoursDiapason(requestTimeHours);
        return `${requestTimeHours}:${requestTimeMinutes} ${getHoursDiapason}`;
    }

    transformTemperatures() {
        this._weather.airTemperature = Temperature.transformTemperature(this._weather.airTemperature);
        this._weather.feelsLikeAirTemperature = Temperature.transformTemperature(this._weather.feelsLikeAirTemperature);
        this._wind.windDeg = Temperature.transformTemperature(this._wind.windDeg);
    }

    getModel() {
        return {
            requestTime: this._requestTime,
            city: this._city,
            weather: this._weather,
            wind: this._wind,
            clouds: this._clouds,
            sunriseAndSunset: this._sunriseAndSunset
        };
    }
}