import { PiShoppingBagFill } from 'react-icons/pi';
export function Logo() {
  return (
    <div className='flex cursor-pointer items-center gap-3 font-bold'>
      <PiShoppingBagFill className='text-xl sm:text-3xl' />
      <h1 className='whitespace-nowrap text-lg sm:text-2xl'>
        <span>Supply</span> <span className='text-secondary-500'>Hub</span>
      </h1>
    </div>
  );
}
