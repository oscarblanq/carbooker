import { SlotType } from '../models/SlotType';

export const slotsFromApi = (apiResponse: any): SlotType[] => {
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
