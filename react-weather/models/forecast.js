module.exports = class Forecast {
    static forecastList = [
        'current',
        'minutely',
        'hourly',
        'daily'
    ];

    static getExcludeForecasts(forecast) {
        const excludeForecastList = Forecast.forecastList.filter(currentForecat => currentForecat !== forecast);
        return excludeForecastList.join(',');
    }
}