import React from 'react';
import ForecastCurrent from './Current/ForecastCurrent';
import styles from './Forecast.module.css';

const Forecast = () => {
  /* 
    forecast
  */
  return (
    <div className={styles.forecast}>
      <ForecastCurrent />
    </div>
  );
};

export default Forecast;