import './weather.css'

const Weather = ({city, weather}) => {

    const {temp, feelsLike, pressure, country, humidity, wind, icon, description} = weather;


    return(
        <div className='weather'>
            {city ? 
                <div >
                    <p> {city} {country} </p>
                    <p className='temp'> {temp} </p>
                    <p>{icon} {description}  </p>
                    <p> {feelsLike}</p>
                    <p>{pressure}</p>
                    <p> {humidity} </p>
                    <p> {wind} </p>
                </div>
             : null
            } 
        </div>
    )  
}

export default Weather;