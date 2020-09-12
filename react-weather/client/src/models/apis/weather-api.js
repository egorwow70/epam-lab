import Axios from './axios';

export default class WeatherApi {
    static getCityWeatherApi(lat, lon) {
        const cityWeatherUrl = `/weather-api/weather/${lat}/${lon}`;
        return Axios.getUrlData(cityWeatherUrl);
    }

    static getOneCallWeatherApi(forecast, lat, lon) {
        const oneCallWeatherUrl = `/weather-api/one-call/${forecast}/${lat}/${lon}`;
        return Axios.getUrlData(oneCallWeatherUrl);
    }
}