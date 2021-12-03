import { useCallback } from "react";

const  WeatherService = () =>  {

    const getWeather = useCallback (async (city) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e897d3d88e95bb05e8d05bbc09c2c794`;
        const res = await fetch(url)
        
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        
        const data = await res.json();
        return _transformWeather(data); 
    }, []); 

    const _transformWeather = (data) => {
        return {
            city: data.name,
            country: data.sys.country,
            temp: Math.round(data.main.temp),
            feelsLike: Math.round(data.main.feels_like),
            pressure: data.main.pressure,
            humidity: data.main.humidity,
            wind: data.wind.speed,
            icon:data.weather[0].main,
            description: data.weather[0].description
        }
    }

    return{getWeather}
}

export default WeatherService;