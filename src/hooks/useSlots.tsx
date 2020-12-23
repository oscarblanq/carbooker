import { useEffect, useState } from 'react';
import { API_TOKEN, API_URL } from '../config/api.config';
import { useDate } from '../hooks/useDate';
import { SlotType } from '../models/SlotType';
import { mapDate } from '../utils/mapDate';
import { slotsFromApi } from '../utils/slotsFromApi';

type UseSlotType = {
  slots: SlotType[];
  loading: boolean;
};

export const useSlots = (): UseSlotType => {
  const { date } = useDate();
  const [loading, setLoading] = useState(false);
  const [slots, setSlots] = useState<SlotType[] | []>([]);

  useEffect(() => {
    setLoading(true);
    fetchData(date).then((slots) => {
      setSlots(slots);
      setLoading(false);
    });
  }, [date]);

  return { slots, loading };
};

const fetchData = async (date: Date) => {
  const dateString = mapDate(date);
  const apiURL = `${API_URL}/booking/availability?date=${dateString}`;
  return await fetch(apiURL, {
    headers: new Headers({
      Authorization: API_TOKEN,
    }),
  })
    .then((res) => res.json())
    .then(slotsFromApi);
};
