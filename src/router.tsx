import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GlobalLayout } from './layout/global-layout';
import { Login } from './pages/login/login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <GlobalLayout />,
    children: [
      { path: '/', element: 'Home' },
      { path: 'login', element: <Login /> },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
