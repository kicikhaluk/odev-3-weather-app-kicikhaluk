import React, { useState, useContext } from 'react';
import ForecastContext from '../../contexts/ForecastContext';
import citiesData from '../../cities.json';

const DataList = () => {

  const [county, setCounty] = useState('');
  const options = citiesData.map(city => (<option key={city.name} value={city.name} />));
  const { setCity } = useContext(ForecastContext);

  const getCityCoordinates = (county) => {
    const { name, latitude, longitude } = citiesData.find(city => city.name === county);
    setCity({
      name,
      latitude,
      longitude
    });
  };

  return (
    <div>
      <label htmlFor="cities">Choose a City:</label>
      <input list="cities" id="county" name="county" onInput={(e) => setCounty(e.target.value)} />
      <datalist id="cities">
        {options}
      </datalist>
      <button onClick={() => getCityCoordinates(county)}>Get Forecast</button>
    </div>
  );
};

export default DataList;