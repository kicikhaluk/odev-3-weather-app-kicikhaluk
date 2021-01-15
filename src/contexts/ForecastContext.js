import { createContext, useEffect, useState } from 'react';
import forecastService from '../services';

const ForecastContext = createContext({});

export const ForecastProvider = ({ children }) => {

  const [getForecast, setForecast] = useState([]);

  useEffect(() => {
    forecastService
      .getForecast()
      .then(data => mapForecast(data))
      .catch(err => console.log(err));
  }, []);

  console.log(getForecast);

  const getDay = (i) => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    return days[((new Date().getUTCDay() + i) % 7)];
  };

  const mapForecast = (forecast) => {
    const mappedForecast = forecast.map((daily, index) => {
      return {
        day: getDay(index),
        min: daily.temp.min,
        max: daily.temp.max,
        sunrise: daily.sunrise,
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
    <ForecastContext.Provider value={getForecast}>
      {children}
    </ForecastContext.Provider>
  );
};


export default ForecastContext;