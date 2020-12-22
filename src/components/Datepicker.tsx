import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import es from 'date-fns/locale/es';
import { useDate } from '../hooks/useDate';
registerLocale('es', es);

export const Datepicker: React.FC = () => {
  const { date, setDate } = useDate();
  return (
    <DatePicker
      selected={date}
      minDate={new Date()}
      onChange={(date: Date) => setDate(date)}
      locale="es"
      inline
      dateFormat="dd 'de' MMMM"
    />
  );
};
