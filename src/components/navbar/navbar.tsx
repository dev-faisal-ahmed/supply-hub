import { Cart } from './cart';
import { Logo } from './logo';
import { useNavigate } from 'react-router-dom';
import { SearchDesktop } from './search/search-desktop';
import { removeToken, successToast } from '../../utils/helper';

export function Navbar() {
  const route = useNavigate();

  function handleLogout() {
    removeToken();
    successToast('Logged out successfully');
    route('/login');
  }

  return (
    <nav className='sticky top-0 z-20 bg-primary-500 py-3 text-white'>
      <div className='container flex items-center gap-5'>
        <Logo />
        <SearchDesktop />
        <div className='ml-auto' />
        <Cart />
        <button
          onClick={handleLogout}
          className='rounded bg-red-500 p-2 text-sm font-semibold transition  hover:bg-red-700 sm:px-5 sm:py-2 sm:text-base'
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
