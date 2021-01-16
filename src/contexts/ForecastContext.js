import { createContext, useEffect, useState } from 'react';
import forecastService from '../services';

const ForecastContext = createContext({});

export const ForecastProvider = ({ children }) => {

  const [getForecast, setForecast] = useState([]);
  const [getCity, setCity] = useState({ name: "Hatay", latitude: "36.200001", longitude: "36.166668" });

  useEffect(() => {
    forecastService
      .getForecast(getCity.latitude, getCity.longitude)
      .then(data => mapForecast(data))
      .catch(err => console.log(err));
  }, [getCity]);

  const getDay = (unixTime) => {
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[((new Date(unixTime * 1000).getUTCDay()))];
  };

  const getSunrise = (unixTime) => {
    const hour = new Date(unixTime * 1000).getHours();
    const minutes = new Date(unixTime * 1000).getMinutes();
    return `${hour}:${minutes}`;
  };


  const mapForecast = (forecast) => {
    const mappedForecast = forecast.map((daily) => {
      return {
        day: getDay(daily.dt),
        min: daily.temp.min,
        max: daily.temp.max,
        sunrise: getSunrise(daily.sunrise),
        humidity: daily.humidity,
        windSpeed: daily.wind_speed,
        main: daily.weather[0].main,
        description: daily.weather[0].description,
        icon: daily.weather[0].icon
      };
    });
    setForecast(mappedForecast);
  };

  return (
    <ForecastContext.Provider value={{ getForecast, getCity, setCity }}>
      {children}
    </ForecastContext.Provider>
  );
};


export default ForecastContext;