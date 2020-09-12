const DailyWeather = require('./daily-weather');

module.exports = class DailyWeatherList {
    constructor(
        dailyWeatherList
    ) {
        this._dailyWeatherList = this.transfromDailyWeatherList(dailyWeatherList);
    }

    transfromDailyWeatherList(dailyWeatherList) {
        return dailyWeatherList.map(dailyWeather => {
            return new DailyWeather(
                dailyWeather.dt,
                dailyWeather.temp.day,
                dailyWeather.temp.night,
                dailyWeather.weather[0].description,
                dailyWeather.weather[0].icon
            ).getModel();
        });
    }

    getModel() {
        return [...this._dailyWeatherList];
    }
}