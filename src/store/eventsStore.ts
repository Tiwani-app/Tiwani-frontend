import {create} from 'zustand';
import {TiwaniEvent} from '../types/event';

interface EventsState {
  events: TiwaniEvent[];
  loading: boolean;
  error: string | null;
  setEvents: (events: TiwaniEvent[]) => void;
  setLoading: (value: boolean) => void;
  setError: (error: string | null) => void;
}

export const useEventsStore = create<EventsState>(set => ({
  events: [],
  loading: false,
  error: null,
  setEvents: events => set({events}),
  setLoading: loading => set({loading}),
  setError: error => set({error}),
}));
