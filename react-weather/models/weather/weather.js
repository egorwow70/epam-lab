module.exports = class Weather {
    constructor(
        airTemperature,
        feelsLikeAirTemperature,
        weatherDescription,
        weatherIcon,
        pressure,
        humidity
    ) {
        this._airTemperature = airTemperature;
        this._feelsLikeAirTemperature = feelsLikeAirTemperature;
        this._weatherDescription = this.increaseFirstLetter(weatherDescription);
        this._weatherIcon = weatherIcon;
        this._pressure = this.getPressureString(pressure);
        this._humidity = this.getHumidityString(humidity);
    }

    increaseFirstLetter(str) {
        return str[0].toUpperCase() + str.slice(1);
    }
    
    getPressureString(pressure) {
        return `${pressure}hPa`;
    }

    getHumidityString(humidity) {
        return `${humidity}%`;
    }

    getModel() {
        return {
            airTemperature: this._airTemperature,
            feelsLikeAirTemperature: this._feelsLikeAirTemperature,
            weatherDescription: this._weatherDescription,
            weatherIcon: this._weatherIcon,
            pressure: this._pressure,
            humidity: this._humidity
        };
    }
}