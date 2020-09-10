import React from 'react';
import Weather from './Weather';
import WeatherApi from '../../models/weather-api';

class WeatherContainer extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true
        };
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(position => {
            const numbersToRoundAfterPoint = 2;
            const geolocationLat = (position.coords.latitude).toFixed(numbersToRoundAfterPoint);
            const geolocationLon = (position.coords.longitude).toFixed(numbersToRoundAfterPoint);
            this.setWeather(geolocationLat, geolocationLon);
        }, error => {
            const defaultCityLat = 53.90;
            const defaultCityLon = 27.56;
            this.setWeather(defaultCityLat, defaultCityLon);
        });
    }

    async setWeather(cityLat, cityLon) { 
        const forecast = 'hourly';
        const currentWeatherData = await WeatherApi.getCityWeatherApi(cityLat, cityLon).then(currentWeatherData => currentWeatherData);
        const hourlyWeatherList = await WeatherApi.getOneCallWeatherApi(forecast, cityLat, cityLon).then(currentWeatherData => currentWeatherData);
        this.setState(state => ({
            ...state,
            isLoading: false,
            cityWeather: { ...currentWeatherData },
            hourlyWeatherList: [...hourlyWeatherList]
        }));
    }

    render() {
        return (
            <div className="-app-weather">
                {
                    !this.state.isLoading &&
                    <Weather
                        cityWeather={this.state.cityWeather}
                        hourlyWeatherList={this.state.hourlyWeatherList} />
                }
            </div>
        )
    }
}

export default WeatherContainer;