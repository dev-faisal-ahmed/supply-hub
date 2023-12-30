import { useContext } from 'react';
import { AppContext } from '../context-api/app-provider';

export function useAppContext() {
  const appContext = useContext(AppContext);
  if (!appContext) throw new Error('AppContext can not be accessed');
  return appContext;
}
