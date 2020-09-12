import axios from 'axios';

export default class WeatherApi {
    static async getUrlData(url) {
        return await axios.get(`${url}`).then(response => {
            let { data } = { ...response };
            return data;
        });
    }

    static getCityWeatherApi(lat, lon) {
        const cityWeatherUrl = `/weather-api/weather/${lat}/${lon}`;
        return this.getUrlData(cityWeatherUrl);
    }

    static getOneCallWeatherApi(forecast, lat, lon) {
        const oneCallWeatherUrl = `/weather-api/one-call/${forecast}/${lat}/${lon}`;
        return WeatherApi.getUrlData(oneCallWeatherUrl);
    }
}