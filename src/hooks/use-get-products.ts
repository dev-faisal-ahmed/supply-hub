import { useState } from 'react';
import { serverAddress } from '../data/server-address';
import { errorToast } from '../utils/helper';
import { ProductType } from '../utils/types';

export function useGetProducts() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState<ProductType[]>([]);
  const url = `${serverAddress}/products`;

  function getProducts() {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .then(() => setLoading(false))
      .catch(() => errorToast(`Something went wrong`));
  }

  return { products, loading, getProducts };
}
