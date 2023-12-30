import { useState } from 'react';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import { Portal } from '../../portal/portal';
import { twMerge } from 'tailwind-merge';
export function Cart() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)} className='relative text-3xl'>
        <RiShoppingCart2Fill />
        <span className='absolute -top-3 left-3 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs text-white'>
          99
        </span>
      </button>
      {open && (
        <Portal>
          <section
            onClick={() => setOpen(false)}
            className={twMerge('portal', 'h-screen w-full bg-gray-200/50')}
          >
            <div className='ml-auto h-full max-w-[300px] bg-white p-8'>
              hi Im faisal
            </div>
          </section>
        </Portal>
      )}
    </>
  );
}
