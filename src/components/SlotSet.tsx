import { useSlots } from '../hooks/useSlots';

export const SlotSet: React.FC = () => {
  const { loading, slots } = useSlots();
  return loading ? (
    <p>Cargando...</p>
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
