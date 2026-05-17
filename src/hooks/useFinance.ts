import {useEffect} from 'react';
import {getDuesPeriods, subscribeToLedger} from '../services/financeService';
import {useFinanceStore} from '../store/financeStore';

export const useFinance = (uid?: string, includeAll = false) => {
  const {setDuesPeriods, setError, setLedgerEntries, setLoading} = useFinanceStore();

  useEffect(() => {
    if (!uid && !includeAll) {
      return;
    }
    const ledgerUid = includeAll ? null : uid ?? null;
    setLoading(true);
    const unsubscribe = subscribeToLedger(ledgerUid, entries => {
      setLedgerEntries(entries);
      setLoading(false);
    });
    getDuesPeriods()
      .then(setDuesPeriods)
      .catch(error => setError(error instanceof Error ? error.message : 'Could not load finance data.'));
    return () => unsubscribe();
  }, [includeAll, setDuesPeriods, setError, setLedgerEntries, setLoading, uid]);

  return useFinanceStore();
};
