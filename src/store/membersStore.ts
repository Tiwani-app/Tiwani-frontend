import {create} from 'zustand';
import {User} from '../types/user';

interface MembersState {
  members: User[];
  searchQuery: string;
  loading: boolean;
  error: string | null;
  setMembers: (members: User[]) => void;
  setSearchQuery: (query: string) => void;
  setLoading: (value: boolean) => void;
  setError: (error: string | null) => void;
}

export const useMembersStore = create<MembersState>(set => ({
  members: [],
  searchQuery: '',
  loading: false,
  error: null,
  setMembers: members => set({members}),
  setSearchQuery: searchQuery => set({searchQuery}),
  setLoading: loading => set({loading}),
  setError: error => set({error}),
}));
