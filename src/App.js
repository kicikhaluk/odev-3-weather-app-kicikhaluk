import React from 'react';
import { ForecastProvider } from './contexts/ForecastContext';
import Forecast from './components/Forecast/Forecast';


const App = () => {

  return (
    <ForecastProvider>
      <Forecast />
    </ForecastProvider>
  );
}

export default App;
