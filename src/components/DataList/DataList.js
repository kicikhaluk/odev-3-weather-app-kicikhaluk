import React, { useState, useContext } from 'react';
import styles from './DataList.module.css';
import ForecastContext from '../../contexts/ForecastContext';
import citiesData from '../../cities.json';

const DataList = () => {

  const [county, setCounty] = useState('');
  const { setCity } = useContext(ForecastContext);


  const options = citiesData.map(city => (<option key={city.name} value={city.name} />));

  const getCityCoordinates = (county) => {
    const { name, latitude, longitude } = citiesData.find(city => city.name === county);
    setCity({
      name,
      latitude,
      longitude
    });
  };

  return (
    <div className={styles.datalist}>
      <label className={styles.formElement} htmlFor="cities">Choose a City:</label>
      <input className={styles.formElement} list="cities" id="county" name="county" onInput={(e) => setCounty(e.target.value)} />
      <datalist id="cities">
        {options}
      </datalist>
      <button onClick={() => getCityCoordinates(county)}>Get Forecast</button>
    </div>
  );
};

export default DataList;