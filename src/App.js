import React, { useEffect, useContext, useCallback } from 'react';
import ForecastContext from './contexts/ForecastContext';
import Forecast from './components/Forecast/Forecast';
import forecastServices from './services';

const App = () => {

  const { setCity } = useContext(ForecastContext);
  const getCoordinates = useCallback(() => {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    }
    const success = async (pos) => {
      const { latitude, longitude } = pos.coords;
      let city = await forecastServices.getCityName(latitude, longitude);
      setCity({ name: city, latitude, longitude });
    };

    const error = (err) => {
      if (err.message === 'User denied Geolocation') {
        return { message: "denied" };
      }
      throw new Error("Something went wrong.");
    };

    navigator.geolocation.getCurrentPosition(success, error, options);

  }, [setCity]);

  useEffect(() => {
    getCoordinates();
  }, [getCoordinates]);


  return (
    <>
      <Forecast />
    </>
  );
}

export default App;
