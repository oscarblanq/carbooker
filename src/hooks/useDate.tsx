import { useContext } from 'react';
import { DateContext } from '../context/DateContext';

export const useDate = (): React.ContextType<typeof DateContext> =>
  useContext(DateContext);
