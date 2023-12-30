import { useState } from 'react';
import { serverAddress } from '../data/server-address';
import { errorToast } from '../utils/helper';
import { useAppContext } from './use-app-context';

export function useGetProducts() {
  const [loading, setLoading] = useState(false);
  const { dispatch } = useAppContext();

  function getProducts() {
    const url = `${serverAddress}/products`;
    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: 'UPDATE_ALL_PRODUCTS', payload: data.products }),
      )
      .then(() => setLoading(false))
      .catch(() => errorToast(`Something went wrong`));
  }

  return { loading, getProducts };
}
