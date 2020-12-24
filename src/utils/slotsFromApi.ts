import { SlotType } from '../models/SlotType';

type APIData = {
  data: SlotType[];
};

export const slotsFromApi = (apiResponse: APIData): SlotType[] => {
  const { data = [] } = apiResponse;
  if (Array.isArray(data)) {
    const slots = data.map(({ startTime, endTime, usersAvailable }) => ({
      startTime,
      endTime,
      usersAvailable,
    }));
    return slots;
  }
  return [];
};
