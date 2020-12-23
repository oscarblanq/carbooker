import { useSlots } from '../hooks/useSlots';
import { Loader } from 'semantic-ui-react';

export const SlotSet: React.FC = () => {
  const { loading, slots } = useSlots();
  return loading ? (
    <Loader active inline />
  ) : (
    <>
      {slots ? (
        <ul>
          {slots.map(({ startTime, endTime, usersAvailable }) => (
            <li key={Math.random()}>
              Inicio: {startTime} | Final: {endTime} | Plazas: {usersAvailable}
            </li>
          ))}
        </ul>
      ) : (
        <p>No existen fechas</p>
      )}
    </>
  );
};
