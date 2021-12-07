import { useCallback } from "react";

const  WeatherService = () =>  {

    const getWeather = useCallback(async (city) => {
        const urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=e897d3d88e95bb05e8d05bbc09c2c794`
        const res = await fetch(urlWeather)

        if (!res.ok) {
            throw new Error(`Could not fetch ${urlWeather}, status: ${res.status}`);
        }

        const data = await res.json();  //получим данные в формате json
        return _transformWeather(data);
        
    }, []); 

    const _transformWeather = (data) => {
        return {
            city: data.name + ',',
            country: data.sys.country,
            temp: Math.round(data.main.temp) + "°C",
            feelsLike: "Feels like: " + Math.round(data.main.feels_like) + "°C",
            pressure: "Pressure: " + data.main.pressure + ' hPa',
            humidity: "Humidity: " + data.main.humidity + ' %',
            wind: 'Wind: ' + data.wind.speed + " m/s",
            icon:data.weather[0].main +',' ,
            description: data.weather[0].description
        }
    }

    return{getWeather}
}

export default WeatherService;