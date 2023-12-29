import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GlobalLayout } from './layout/global-layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { path: '/', element: 'Home' },
      { path: 'login', element: 'login' },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
