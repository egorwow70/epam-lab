const Time = require('./time');
const Temperature = require('./temperature');

module.exports = class HourlyWeather {
    constructor(
        time,
        airTemperature,
        icon
    ) {
        this._time = Time.getLocalTimeFromUTCTime(time);
        this._airTemperature = Temperature.transformTemperature(airTemperature);
        this._icon = icon;
    }

    getModel() {
        return {
            time: this._time,
            airTemperature: this._airTemperature,
            icon: this._icon
        };
    }
}