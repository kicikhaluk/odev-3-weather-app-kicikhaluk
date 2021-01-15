import React from 'react';
import CurrentDetail from './CurrentDetail/CurrentDetail';
import styles from './ForecastCurrent.module.css';

const ForecastCurrent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.flexContainerSb}>
        <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" />
        <div className={styles.degree}>
          <small>Highest</small>
          <small>12 &deg; C</small>
        </div>
        <div className={styles.degree}>
          <small>Lowest</small>
          <small>10 &deg; C</small>
        </div>
        <p className={styles.desc}>Mostly Cloudy</p>
        <p className={styles.city}>Hatay</p>
      </div>
      <div className={styles.flexContainerSb}>
        <CurrentDetail identifier="wind" desc="15.6km" />
        <CurrentDetail identifier="humidity" desc="%89" />
        <CurrentDetail identifier="sunrise" desc="06.54" />
      </div>
    </div>
  );
};

export default ForecastCurrent;