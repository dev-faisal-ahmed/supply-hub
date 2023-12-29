import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

export function GlobalLayout() {
  return (
    <section className='text-primary-800 min-h-screen bg-gray-200'>
      <Toaster />
      <Outlet />
    </section>
  );
}
