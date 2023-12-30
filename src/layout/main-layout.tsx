import { Outlet } from 'react-router-dom';
import { Navbar } from '../components/navbar/navbar';
import { AppProvider } from '../context-api/app-provider';

export function MainLayout() {
  return (
    <AppProvider>
      <Navbar />
      <Outlet />;
    </AppProvider>
  );
}
