import './weather.css'

const Weather = ({city, weather}) => {

    const {temp, feelsLike, pressure, country, humidity, wind, icon, description, error} = weather;
    
    return(
        <div className='weather'>
            {city ? 
                <div >
                    <p> {city}, {country} </p>
                    <p className='temp'> {temp} °C </p>
                    <p>{icon}, {description}  </p>
                    <p>Feels like: {feelsLike} °C</p>
                    <p>Pressure: {pressure}hPa</p>
                    <p>Humidity: {humidity} %</p>
                    <p>Wind: {wind} m/s</p>
                </div>
             : null 
            } 
            
            {error ? null : 
                <div >
                    <p> {city}, {country} </p>
                    <p className='temp'> {temp} °C </p>
                    <p>{icon}, {description}  </p>
                    <p>Feels like: {feelsLike} °C</p>
                    <p>Pressure: {pressure}hPa</p>
                    <p>Humidity: {humidity} %</p>
                    <p>Wind: {wind} m/s</p>
                </div>
            }
        </div>
    )  
}

export default Weather;