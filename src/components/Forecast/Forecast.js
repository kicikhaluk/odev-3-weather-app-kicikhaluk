import React, { useContext } from 'react';
import ForecastContext from '../../contexts/ForecastContext';
import ForecastCurrent from './Current/ForecastCurrent';
import ForecastDaily from './Daily/ForecastDaily';
import styles from './Forecast.module.css';

const Forecast = () => {

  const forecastWeekly = useContext(ForecastContext);
  console.log(forecastWeekly);
  if (forecastWeekly.length === 0) {
    return (<h1>Loading...</h1>);
  }
  /* 
    forecast
  */
  return (
    <div className={styles.forecast}>
      <ForecastCurrent current={forecastWeekly[0]} />
      {forecastWeekly.map((daily, index) => {
        if (index !== 0) {
          return <ForecastDaily key={daily.day} daily={daily} />
        }
        return;
      })}
    </div>
  );
};

export default Forecast;