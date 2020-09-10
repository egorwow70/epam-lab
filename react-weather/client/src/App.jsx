import React from 'react';
import './App.css';
import TodayData from './components/today-data/TodayData.jsx';
import CalendarContainer from './components/calendar/CalendarContainer';
import WeatherContainer from './components/weather/WeatherContainer';
import WeatherDailyContainer from './components/weather-daily/WeatherDailyContainer';

function App() {
  return (
    <div className="-app">
      <div className="-app-wrapper">
        <div className="-app-wrapper_top">
          <WeatherContainer />
          <TodayData render={todayRussianDate => (
            <CalendarContainer todayRussianDate={todayRussianDate.clone()} />
          )} />
        </div>
        <div className="-app-wrapper_bottom">
          <WeatherDailyContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
