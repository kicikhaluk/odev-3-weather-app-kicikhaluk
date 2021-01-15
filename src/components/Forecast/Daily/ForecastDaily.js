import React from 'react';
import styles from './ForecastDaily.module.css';

const ForecastDaily = ({ daily }) => {
  const { day, icon, max, min, main } = daily;
  return (
    <div className={styles.wrapper}>
      <div className={styles.conditionStatus}>
        <span>{day}</span>
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon" />
        <span>{max} &deg; C</span>
        <span>{min} &deg; C</span>
      </div>
      <p className={styles.conditionName}>
        {main}
      </p>
    </div>
  )
}

export default ForecastDaily;
