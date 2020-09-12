import Axios from './axios';

export default class GeocodeApi {
    static searchCityGeocodeApi(cityName) {
        const searchCityUrl = `/geocode-api/search-city/${cityName}`;
        return Axios.getUrlData(searchCityUrl);
    }
}
