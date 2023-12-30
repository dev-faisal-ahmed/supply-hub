import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

export function GlobalLayout() {
  return (
    <section className='min-h-screen  bg-gradient-to-tr from-gray-100 via-primary-100 to-gray-200 text-primary-800'>
      <Toaster />
      <Outlet />
    </section>
  );
}
