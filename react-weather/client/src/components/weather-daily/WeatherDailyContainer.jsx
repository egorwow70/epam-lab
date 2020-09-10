import React from 'react';
import WeatherDaily from './WeatherDaily';
import WeatherApi from '../../models/weather-api';

class WeatherDailyContainer extends React.PureComponent {
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
        const forecast = 'daily';
        const dailyWeatherList = await WeatherApi.getOneCallWeatherApi(forecast, cityLat, cityLon).then(currentWeatherData => currentWeatherData);
        this.setState(state => ({
            ...state,
            isLoading: false,
            dailyWeatherList: [...dailyWeatherList]
        }));
    }

    render() {
        return (
            <div className="-app-weather-daily">
                {
                    !this.state.isLoading &&
                    <WeatherDaily
                        dailyWeatherList={this.state.dailyWeatherList} />
                }
            </div>
        )
    }
}

export default WeatherDailyContainer;