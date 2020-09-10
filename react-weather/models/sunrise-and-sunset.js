const Time = require('./time');

module.exports = class SunriseAndSunset {
    constructor(
        sunrise,
        sunset
    ) {
        this._sunrise = Time.getLocalTimeFromUTCTime(sunrise);
        this._sunset = Time.getLocalTimeFromUTCTime(sunset);
    }

    getModel() {
        return {
            sunrise: this._sunrise,
            sunset: this._sunset
        };
    }
}