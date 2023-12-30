/* eslint-disable react-hooks/exhaustive-deps */
import { Navigate } from 'react-router-dom';
import { getToken } from '../../utils/helper';
import { useGetProducts } from '../../hooks/use-get-products';
import { useEffect } from 'react';
import { ProductCard } from '../../components/product-card';
import { Loader } from '../../components/loader';
import { useAppContext } from '../../hooks/use-app-context';

export function Home() {
  const { loading, getProducts } = useGetProducts();
  const {
    state: { allProducts },
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
    <section className='container grid grid-cols-1 gap-5 py-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {allProducts && allProducts.length > 0 ? (
        allProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))
      ) : (
        <h3 className='mt-10 text-center'>No data found</h3>
      )}
    </section>
  );
}
