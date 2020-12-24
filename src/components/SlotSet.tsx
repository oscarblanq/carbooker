import { useSlots } from '../hooks/useSlots';
import { Loader } from 'semantic-ui-react';
import { SlotObject } from '../components/SlotObject';
import styled from 'styled-components';

export const SlotSet: React.FC = () => {
  const { loading, slots } = useSlots();
  return loading ? (
    <Loader active inline />
  ) : (
    <>
      {slots ? (
        <StyledList>
          {slots.map((slot) => (
            <SlotObject key={Math.random()} slot={slot} />
          ))}
        </StyledList>
      ) : (
        <p>No existen horas disponibles</p>
      )}
    </>
  );
};

const StyledList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;
