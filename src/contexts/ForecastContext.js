import { createContext } from 'react';

const ForecastContext = createContext({});

export const ForecastProvider = ({ children }) => {

  return (
    <ForecastContext.Provider value="desc">
      {children}
    </ForecastContext.Provider>
  );
};


export default ForecastContext;