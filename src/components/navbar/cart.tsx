import { RiShoppingCart2Fill } from 'react-icons/ri';
import { useCart } from '../../hooks/use-cart';

export function Cart() {
  const { cart } = useCart();

  return (
    <div className='relative text-3xl'>
      <RiShoppingCart2Fill />
      {Object.keys(cart).length > 0 && (
        <span className='absolute -top-3 left-3 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs text-white'>
          {Object.keys(cart).length}
        </span>
      )}
    </div>
  );
}
