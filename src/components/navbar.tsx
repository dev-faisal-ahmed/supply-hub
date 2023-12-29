import { useNavigate } from 'react-router-dom';
import { removeToken, successToast } from '../utils/helper';
import { Logo } from './logo';

export function Navbar() {
  const route = useNavigate();

  function handleLogout() {
    removeToken();
    successToast('Logged out successfully');
    route('/login');
  }

  return (
    <nav className='bg-primary-500 sticky top-0 z-20 py-3 text-white'>
      <div className='container flex'>
        <Logo />
        <button
          onClick={handleLogout}
          className='ml-auto rounded bg-red-500 p-2 text-sm font-semibold transition  hover:bg-red-700 sm:px-5 sm:py-2 sm:text-base'
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
