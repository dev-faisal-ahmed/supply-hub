/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { getToken } from '../../utils/helper';
import { Loader } from '../../components/loader';
import { ProductCard } from '../../components/product-card';
import { useAppContext } from '../../hooks/use-app-context';
import { useGetProducts } from '../../hooks/use-get-products';
import { PriceFilter } from './price-filter';

export function Home() {
  const { loading, getProducts } = useGetProducts();
  const {
    state: { selectedProducts },
  } = useAppContext();

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return (
      <div className='mx-auto mt-20 w-fit'>
        <Loader />
      </div>
    );
  }

  // ------ Redirecting user to the login page if no token found ------ \\
  if (!getToken()) return <Navigate to={'/login'} />;

  return (
    <section className='container flex gap-5 py-8'>
      <PriceFilter className='' />
      <div>
        <div className='flex items-center justify-between rounded-md bg-white px-4 py-3'>
          <h1 className='font-semibold'>Products</h1>
          <button className='rounded-md border bg-red-600 px-5 py-1 font-semibold text-white transition hover:scale-110'>
            Reset Filter
          </button>
        </div>
        <div className='mt-5 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
          {selectedProducts && selectedProducts.length > 0 ? (
            selectedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))
          ) : (
            <h3 className='mt-10 text-center'>No data found</h3>
          )}
        </div>
      </div>
    </section>
  );
}
