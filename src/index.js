import React from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react';
import './index.css';
import App from './components/app/App';
import WeatherService from './services/WeatherService'


// const weatherService = new WeatherService();

// weatherService.getWeather()
//   .then(res => console.log(res))

ReactDOM.render(
  <StrictMode>
    <App />
    
  </StrictMode>,
  document.getElementById('root')
);


