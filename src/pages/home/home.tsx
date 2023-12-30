/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getToken } from '../../utils/helper';
import { Loader } from '../../components/loader';
import { ProductCard } from '../../components/product-card';
import { useAppContext } from '../../hooks/use-app-context';
import { useGetProducts } from '../../hooks/use-get-products';
import { HiMenuAlt2 } from 'react-icons/hi';
import { PriceFilter } from './price-filter';

export function Home() {
  const [open, setOpen] = useState(false);
  const { loading, getProducts } = useGetProducts();
  const {
    state: { selectedProducts },
    dispatch,
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
    <section className='container flex gap-5 py-5'>
      <PriceFilter className='hidden shadow-md lg:block' />
      <div className='w-full'>
        <div className='flex items-center gap-5 rounded-md bg-white px-4 py-3'>
          <button onClick={() => setOpen(true)} className='text-2xl lg:hidden'>
            <HiMenuAlt2 />
          </button>

          <div className='block lg:hidden'>
            {open && (
              <section
                onClick={() => setOpen(false)}
                className='fixed left-0 top-0 z-30 h-screen w-full bg-gray-500/30'
              >
                <div
                  onClick={(e) => e.stopPropagation()}
                  className='h-full w-fit min-w-[280px] bg-white p-1'
                >
                  <PriceFilter className='static' />
                </div>
              </section>
            )}
          </div>

          <h1 className='font-semibold'>Products</h1>
          <button
            onClick={() => dispatch({ type: 'RESET_FILTER' })}
            className='ml-auto rounded-md border bg-red-600 px-5 py-1 font-semibold text-white transition hover:scale-110'
          >
            Reset Filter
          </button>
        </div>

        {selectedProducts && selectedProducts.length > 0 ? (
          <div className='mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3'>
            {selectedProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <h3 className='mt-10 text-center text-xl font-bold'>No data found</h3>
        )}
      </div>
    </section>
  );
}
