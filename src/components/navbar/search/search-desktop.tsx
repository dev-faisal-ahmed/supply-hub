import { FiSearch } from 'react-icons/fi';
export function SearchDesktop() {
  return (
    <form className='hidden w-full min-w-[150px] cursor-pointer  items-center rounded-md bg-white px-5 py-2 md:flex'>
      <input
        className='w-full border-none text-primary-700 outline-none'
        type='text'
        placeholder='Search ...'
      />
      <button>
        <FiSearch className='text-2xl text-primary-500' />
      </button>
    </form>
  );
}
