import {User} from '../types/user';

export const isAdmin = (user: User | null): boolean => user?.role === 'admin';
