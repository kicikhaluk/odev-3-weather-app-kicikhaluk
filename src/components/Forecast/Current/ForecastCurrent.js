import React from 'react';
import CurrentDetail from './CurrentDetail/CurrentDetail';
import styles from './ForecastCurrent.module.css';

const ForecastCurrent = ({ current, city = "Hatay" }) => {
  const { day, description, humidity, icon, max, min, sunrise, windSpeed } = current;
  return (
    <div className={styles.wrapper}>
      <div className={styles.flexContainerSb}>
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="weather icon" />
        <div className={styles.degree}>
          <small>Highest</small>
          <small>{max} &deg; C</small>
        </div>
        <div className={styles.degree}>
          <small>Lowest</small>
          <small>{min} &deg; C</small>
        </div>
        <p className={styles.desc}>{day}<br />{description}</p>
        <p className={styles.city}>{city}</p>
      </div>
      <div className={styles.flexContainerSb}>
        <CurrentDetail identifier="wind" desc={`%${windSpeed} km/h`} />
        <CurrentDetail identifier="humidity" desc={`%${humidity}`} />
        <CurrentDetail identifier="sunrise" desc="06.54" />
      </div>
    </div>
  );
};

export default ForecastCurrent;