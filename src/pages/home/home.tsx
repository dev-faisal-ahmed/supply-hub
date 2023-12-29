import { Navigate } from 'react-router-dom';
import { getToken } from '../../utils/helper';
import { Navbar } from '../../components/navbar';

export function Home() {
  // ------ Redirecting user to the login page if no token found ------ \\
  if (!getToken()) return <Navigate to={'/login'} />;
  return (
    <section>
      <Navbar />
    </section>
  );
}
