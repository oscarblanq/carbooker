import { createContext, useState } from 'react';

type DateContextType = {
  date: Date;
  setDate: (date: Date) => void;
};

const initialValue = {
  date: new Date(),
  setDate: (date: Date) => date,
};

export const DateContext = createContext<DateContextType>(initialValue);

export const DateProvider: React.FC = ({ children }) => {
  const [date, setDate] = useState(new Date());
  return (
    <DateContext.Provider value={{ date, setDate }}>
      {children}
    </DateContext.Provider>
  );
};
