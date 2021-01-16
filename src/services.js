/* 
  @desc get today and next 6 days foreceast info at related coordinates
  @data interested data fields in every object 
    [ 
      {
        ...
        dt
        sunrise
        temp: {
          ...
          min 
          max
          ...
        }
        humidity,
        wind_speed,
        weather : [
          {
            ...
            main: "rain"
            description
            icon
          }
        ] 
      },
      ...  
    ]
*/

const getForecast = async (lat = '36.200001', long = '36.166668') => {
  const APIURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&exclude=current,hourly,minutely,alerts&appid=${process.env.REACT_APP_WEATHER_API}`;
  try {
    const res = await fetch(APIURL);
    const { daily } = await res.json();
    return daily;
  } catch (err) {
    throw new Error("Invalid API Request for get weather");
  }
};

/* 
  @desc get city name
*/

const getCityName = async (lat, long) => {
  try {
    const APIURL = `https://us1.locationiq.com/v1/reverse.php?key=${process.env.REACT_APP_LOCATION_API}&lat=${lat}&lon=${long}&format=json`;
    const res = await fetch(APIURL);
    const { address } = await res.json();
    return address.county;
  } catch (err) {
    throw new Error("Invalid API Request for get city");
  }
};

const forecast = {
  getForecast,
  getCityName
};

export default forecast;