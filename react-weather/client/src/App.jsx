import React from 'react';
import './App.css';
import TodayData from './components/today-data/TodayData.jsx';
import CalendarContainer from './components/calendar/CalendarContainer';
import WeatherContainer from './components/weather/WeatherContainer';
import WeatherDailyContainer from './components/weather-daily/WeatherDailyContainer';
import { connect, useSelector } from 'react-redux';
import { LoadWeatherDataAction, LoadForecastWeatherDataAction, StartSearchWeatherAction } from '../src/store/weather/weather.actions';
import { weatherFeatureKey } from '../src/store/weather/weather.reducer';
import PropTypes from 'prop-types';
import MenuContainer from './components/menu/MenuContainer';
import { geocodeFeatureKey }  from './store/geocode/geocode.reducer';
import { EndSeacrhCityAction } from './store/geocode/geocode.actions';

function App(props) {
  function searchWeather() {
    navigator.geolocation.getCurrentPosition(position => {
      const numbersToRoundAfterPoint = 2;
      const geolocationLat = (position.coords.latitude).toFixed(numbersToRoundAfterPoint);
      const geolocationLon = (position.coords.longitude).toFixed(numbersToRoundAfterPoint);
      loadWeather(geolocationLat, geolocationLon);
    }, error => {
      const defaultCityLat = 53.90;
      const defaultCityLon = 27.56;
      loadWeather(defaultCityLat, defaultCityLon);
    });
  }

  async function loadWeather(cityLat, cityLon) {
    const hourlyForecast = 'hourly';
    const dailyForecast = 'daily';
    const weatherLoadOptions = {
      cityLat,
      cityLon
    };
    const hourlyWeatherLoadOptions = {
      forecastType: hourlyForecast,
      ...weatherLoadOptions
    };
    const dailyWeatherLoadOptions = {
      forecastType: dailyForecast,
      ...weatherLoadOptions
    };
    props.LoadWeatherDataAction(weatherLoadOptions);
    props.LoadForecastWeatherDataAction(hourlyWeatherLoadOptions);
    props.LoadForecastWeatherDataAction(dailyWeatherLoadOptions);
  }

  const isStartedSearchWeatherAction = useSelector(state => state[weatherFeatureKey].isStartedSearchWeather);
  const searchCity = useSelector(state => state[geocodeFeatureKey].searchCity);

  if (!isStartedSearchWeatherAction) {
    props.StartSearchWeatherAction();
    searchWeather();
  }

  if (Boolean(searchCity)) {
    props.EndSeacrhCityAction();
    props.StartSearchWeatherAction();
    loadWeather(searchCity.lat, searchCity.lon);
  }

  const isLoadingCityWeather = useSelector(state => state[weatherFeatureKey].isLoadingCityWeather);
  const isLoadingHourlyWeather = useSelector(state => state[weatherFeatureKey].isLoadingHourlyWeather);
  const isLoadingDailyWeather = useSelector(state => state[weatherFeatureKey].isLoadingDailyWeather);
  return (
    <div className="-app">
      <MenuContainer />
      <div className="-app-wrapper">
        <div className="-app-wrapper_top">
          {!isLoadingCityWeather && !isLoadingHourlyWeather &&
            <WeatherContainer />
          }
          <TodayData render={todayRussianDate => (
            <CalendarContainer todayRussianDate={todayRussianDate.clone()} />
          )} />
        </div>
        <div className="-app-wrapper_bottom">
          {!isLoadingDailyWeather &&
            <WeatherDailyContainer />
          }
        </div>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  LoadWeatherDataAction,
  LoadForecastWeatherDataAction,
  StartSearchWeatherAction,
  EndSeacrhCityAction
};

App.propTypes = {
  LoadWeatherDataAction: PropTypes.func,
  LoadForecastWeatherDataAction: PropTypes.func,
  StartSearchWeatherAction: PropTypes.func
}

export default connect(null, mapDispatchToProps)(React.memo(App));
