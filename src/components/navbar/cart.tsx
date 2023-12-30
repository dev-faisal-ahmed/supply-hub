import { RiShoppingCart2Fill } from 'react-icons/ri';
import { useAppContext } from '../../hooks/use-app-context';

export function Cart() {
  const {
    state: { cart },
  } = useAppContext();
  // const { cart } = useCart();

  return (
    <div className='relative cursor-pointer'>
      <RiShoppingCart2Fill className='text-xl sm:text-3xl' />
      {Object.keys(cart).length > 0 && (
        <span className='absolute -top-2 left-3 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-xs text-white sm:-top-3 sm:h-6 sm:w-6'>
          {Object.keys(cart).length}
        </span>
      )}
    </div>
  );
}
