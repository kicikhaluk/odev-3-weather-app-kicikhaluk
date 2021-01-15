import React from 'react';
import styles from './ForecastCurrent.module.css';

const ForecastCurrent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.overview}>
        <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" />
        <small className={styles.max}>12</small>
        <small className={styles.min}>10</small>
        <small className={styles.desc}>Mostly Cloudy</small>
      </div>
      <div className={styles.details}>
        <div></div>
        <div>humidity</div>
        <div>Sunrise</div>
      </div>
    </div>
  );
};

export default ForecastCurrent;