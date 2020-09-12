const Time = require('./time');
const Temperature = require('./temperature');
const StringTransformer = require('./string-transformer');

module.exports = class DailyWeather {
    constructor(
        time,
        dayTemperature,
        nightTemperature,
        description,
        icon
    ) {
        this._data = Time.getLocalDataFromUTCTime(time);
        this._midday = Time.getLocalMiddayFromUTCTime(time);
        this._dayTemperature = Temperature.transformTemperature(dayTemperature);
        this._nightTemperature = Temperature.transformTemperature(nightTemperature);
        this._description = StringTransformer.increaseFirstLetter(description);
        this._icon = icon;
    }

    getModel() {
        return {
            data: this._data,
            midday: this._midday,
            dayTemperature: this._dayTemperature,
            nightTemperature: this._nightTemperature,
            description: this._description,
            icon: this._icon
        };
    }
}