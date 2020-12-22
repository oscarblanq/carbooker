import { useContext } from 'react';
import { DateContext } from '../context/DateContext';

export const useDate = () => useContext(DateContext);
