import React from 'react';
import { Datepicker } from '../components/Datepicker';
import { SlotSet } from '../components/SlotSet';

import { DateProvider } from '../context/DateContext';

export const Home: React.FC = () => {
  return (
    <DateProvider>
      <Datepicker />
      <SlotSet />
    </DateProvider>
  );
};
