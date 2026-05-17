import {DuesPeriod, LedgerEntry} from '../types/finance';
import {delay, mockDuesPeriods, mockLedger} from './mockData';

export const subscribeToLedger = (uid: string | null, callback: (entries: LedgerEntry[]) => void) => {
  callback(uid ? mockLedger.filter(entry => entry.uid === uid) : mockLedger);
  return () => {};
};

export const getDuesPeriods = async (): Promise<DuesPeriod[]> => {
  await delay();
  return mockDuesPeriods;
};
