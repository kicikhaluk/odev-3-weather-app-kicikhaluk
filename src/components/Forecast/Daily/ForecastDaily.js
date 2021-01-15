import React from 'react';
import styles from './ForecastDaily.module.css';

const ForecastDaily = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.conditionStatus}>
        <span>Mon</span>
        <span>Icon</span>
        <span>Max</span>
        <span>Min</span>
      </div>
      <p className={styles.conditionName}>
        Rain
      </p>
    </div>
  )
}

export default ForecastDaily;
