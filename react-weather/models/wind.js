module.exports = class Wind {
    constructor(
        windSpeed,
        windDeg
    ) {
        this._windSpeed = this.getWindSpeedString(windSpeed);
        this._windDeg = windDeg;
    }

    getWindSpeedString(windSpeed) {
        return `${windSpeed}m/s`;
    }

    getModel() {
        return {
            windSpeed: this._windSpeed,
            windDeg: this._windDeg
        };
    }
}