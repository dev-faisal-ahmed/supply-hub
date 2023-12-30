import { useContext } from 'react';
import { AppContext } from '../context-api/App-provider';

export function useAppContext() {
  const AppLicationContext = useContext(AppContext);
  if (!AppLicationContext) throw new Error('Cannot use this context');
  return AppLicationContext;
}
