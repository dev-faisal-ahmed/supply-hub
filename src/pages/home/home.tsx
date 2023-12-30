/* eslint-disable react-hooks/exhaustive-deps */
import { Navigate } from 'react-router-dom';
import { getToken } from '../../utils/helper';
import { Navbar } from '../../components/navbar/navbar';
import { useGetProducts } from '../../hooks/use-get-products';
import { useEffect } from 'react';
import { ProductCard } from '../../components/product-card';
import { useAppContext } from '../../hooks/use-app-context';

export function Home() {
  const { loading, getProducts } = useGetProducts();
  const {
    state: { allProducts },
  } = useAppContext();

  useEffect(() => {
    getProducts();
  }, []);

  // ------ showing loader if the data is fetching  ------ \\
  if (loading) return null;

  // ------ Redirecting user to the login page if no token found ------ \\
  if (!getToken()) return <Navigate to={'/login'} />;

  return (
    <section>
      <Navbar />
      {/* products */}
      <section className='container grid grid-cols-1 gap-5 py-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {allProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </section>
    </section>
  );
}
