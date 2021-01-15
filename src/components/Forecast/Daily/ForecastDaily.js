import React from 'react';
import styles from './ForecastDaily.module.css';

const ForecastDaily = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.conditionStatus}>
        <span>Mon</span>
        <img src="http://openweathermap.org/img/wn/10d@2x.png" />
        <span>12 &deg; C</span>
        <span>8 &deg; C</span>
      </div>
      <p className={styles.conditionName}>
        Rain
      </p>
    </div>
  )
}

export default ForecastDaily;
