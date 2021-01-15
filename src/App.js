import React from 'react';
import { ForecastProvider } from './contexts/ForecastContext';
import Forecast from './components/Forecast/Forecast';
import DataList from './components/DataList/DataList';


const App = () => {

  return (
    <ForecastProvider>
      <DataList />
      <Forecast />
    </ForecastProvider>
  );
}

export default App;
