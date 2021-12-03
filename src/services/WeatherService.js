import { useCallback } from "react";

const  WeatherService = () =>  {
   
    const getResource = useCallback (async (url) =>  { 
        let res = await fetch(url);
        
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        const data = await res.json();  //получим данные в формате json
        return data; 

    }, []);

    const getWeather = async (city) => {
        const res = await getResource( `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e897d3d88e95bb05e8d05bbc09c2c794`)
        return _transformWeather(res);
        // return res;
        
    } 

    const _transformWeather = (res) => {
        return {
            city: res.name,
            country: res.sys.country,
            temp: Math.round(res.main.temp),
            feelsLike: Math.round(res.main.feels_like),
            pressure: res.main.pressure,
            humidity: res.main.humidity,
            wind: res.wind.speed,
            icon:res.weather[0].main,
            description: res.weather[0].description
        }
    }

    return{getWeather}
}

export default WeatherService;
