import React from 'react';
import ForecastCurrent from './Current/ForecastCurrent';
import ForecastDaily from './Daily/ForecastDaily';
import styles from './Forecast.module.css';

const Forecast = () => {
  /* 
    forecast
  */
  return (
    <div className={styles.forecast}>
      <ForecastCurrent />
      <ForecastDaily />
      <ForecastDaily />
      <ForecastDaily />
      <ForecastDaily />
      <ForecastDaily />
      <ForecastDaily />
    </div>
  );
};

export default Forecast;