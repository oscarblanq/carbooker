import { Card } from 'semantic-ui-react';
import { SlotType } from '../models/SlotType';

type SlotObjectProps = {
  slot: SlotType;
  className?: string;
};

const convertTime = (time: string): string => time.slice(0, 5);

export const SlotObject: React.FC<SlotObjectProps> = ({ slot }) => {
  const { startTime, endTime, usersAvailable } = slot;
  const time = `${convertTime(startTime)} - ${convertTime(endTime)}`;
  const description = `${usersAvailable} plazas`;
  return (
    <Card
      href="#card-example-link-card"
      header={time}
      description={description}
    />
  );
};
