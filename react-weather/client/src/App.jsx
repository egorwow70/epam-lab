import React from 'react';
import './App.css';
import TodayData from './components/today-data/TodayData.jsx';
import CalendarContainer from './components/calendar/CalendarContainer';
import WeatherContainer from './components/weather/WeatherContainer';

function App() {
  return (
    <div className="-app">
      <TodayData render={todayRussianDate => (
        <CalendarContainer todayRussianDate={todayRussianDate.clone()} />
      )} />
      <WeatherContainer />
    </div>
  );
}

export default App;
