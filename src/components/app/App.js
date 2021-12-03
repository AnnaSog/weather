import { useState, useCallback} from "react";

import Form from '../form/Form';
import WeatherService from '../../services/WeatherService';
import Weather from '../weather/Weather';
import Info from '../info/Info';

import './App.css';

function App() {

  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState({});
  const [error, setError] = useState(null);

  const {getWeather} = WeatherService();

  const updateCity = (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
     
    if(city) {      //если город внесен, то заработают все действия 

      clearError();
      getWeather(city)
        .then(res =>{
            setCity(res.city)
            setWeather(res)
            // console.log(res)
          })
        .catch((err) => {
          setError(err.message)
        })
    }
  } 
  
  //фун-ия по очистке ошибок, по умолчанию она не будет очищаться
  const clearError = useCallback( ()=> {
    setError(null)              //сообщение об ошибке исчезнет
  }, []);

  return (
    <div className="App">
      <div className="main">
        <div className="info" >
            <Info/>
        </div>
        <div className="formInfo">
          <Form weatherMethod={updateCity}
            error={error}/>
          <Weather 
            city={city}
            weather={weather}
          />
        </div>
      </div>     
    </div>
  );
}

export default App;
