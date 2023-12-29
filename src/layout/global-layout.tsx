import { Outlet } from 'react-router-dom';

export function GlobalLayout() {
  return (
    <section className='min-h-screen bg-gray-100'>
      <Outlet />
    </section>
  );
}
