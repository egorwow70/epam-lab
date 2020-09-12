module.exports = class CityGeocode {
    constructor(location) {
        this.initCityCoordinates(location);
    }

    initCityCoordinates(location) {
        const digitsNumberAfterPoint = 2;

        const coordinates = location.split(' ');
        this._latitude = Number(coordinates[1]).toFixed(digitsNumberAfterPoint);
        this._longitude = Number(coordinates[0]).toFixed(digitsNumberAfterPoint);
    }

    getModel() {
        return {
            lat: this._latitude,
            lon: this._longitude
        };
    }
}