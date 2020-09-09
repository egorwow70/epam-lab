import React from 'react';
import axios from 'axios';

class WeatherContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        
        this.state = {
            cityWeather: null
        };
    }

    async componentDidMount() {
        await this.getWeatherApi().then(currentWeatherData=>{
            this.setState(state=>({
                ...state,
                cityWeather: {...currentWeatherData}
            }))
        });
    }

    async getWeatherApi() {
        return await axios.get('/weather-api/weather/Mogilev').then(response => {
            let { data } = {...response};
            return data;
        });
    }

    render() {
        return (
            <div className="-app-weather">
                {JSON.stringify(this.state.cityWeather)}
            </div>
        )
    }
}

export default WeatherContainer;