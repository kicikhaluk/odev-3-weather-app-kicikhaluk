import React, { useContext } from 'react';
import ForecastContext from '../../contexts/ForecastContext';
import DataList from '../DataList/DataList';
import ForecastCurrent from './Current/ForecastCurrent';
import ForecastDaily from './Daily/ForecastDaily';
import styles from './Forecast.module.css';

const Forecast = () => {

  const { getForecast, getCity } = useContext(ForecastContext);
  if (getForecast.length === 0) {
    return (<h1>Loading...</h1>);
  }

  return (
    <div className={styles.forecast}>
      <DataList />
      <ForecastCurrent current={getForecast[0]} city={getCity.name} />
      {getForecast.map((daily, index) => (index !== 0 && <ForecastDaily key={daily.day} daily={daily} />))}
    </div>
  );
};

export default Forecast;