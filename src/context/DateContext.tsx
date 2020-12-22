import { createContext, useEffect, useState } from 'react';

type ContextType = {
  date: Date;
  setDate: (date: Date) => void;
};

const initialValue = {
  date: new Date(),
  setDate: (date: Date) => console.log(`${date} is not a date valid`),
};

export const DateContext = createContext<ContextType>(initialValue);

const options = {
  weekday: 'long',
  month: 'short',
  day: 'numeric',
};

export const DateProvider: React.FC = ({ children }) => {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    console.log(date.toLocaleDateString('es-ES', options));
  }, [date]);
  return (
    <DateContext.Provider value={{ date, setDate }}>
      {children}
    </DateContext.Provider>
  );
};
