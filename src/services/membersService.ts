import {User} from '../types/user';
import {delay, mockUsers} from './mockData';

export const subscribeToMembers = (callback: (members: User[]) => void) => {
  callback(mockUsers);
  return () => {};
};

export const getMember = async (uid: string): Promise<User> => {
  await delay();
  const member = mockUsers.find(item => item.uid === uid);
  if (!member) {
    throw new Error('Member not found.');
  }
  return member;
};

export const updateMemberProfile = async (_uid: string, _data: Partial<User>): Promise<void> => {
  await delay();
};
