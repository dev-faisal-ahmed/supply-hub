import { FiSearch } from 'react-icons/fi';
import { useAppContext } from '../../../hooks/use-app-context';
import { useEffect, useState } from 'react';

export function SearchDesktop() {
  const [keyword, setKeyword] = useState('');
  const { dispatch } = useAppContext();

  useEffect(() => {
    dispatch({ type: 'SEARCH_PRODUCTS', payload: { keyword } });
  }, [keyword, dispatch]);

  return (
    <div className='hidden w-full min-w-[150px] cursor-pointer  items-center rounded-md bg-white px-5 py-2 md:flex'>
      <input
        className='w-full border-none text-primary-700 outline-none'
        type='text'
        placeholder='Search ...'
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        name='search'
        autoComplete='off'
      />

      <FiSearch className='text-2xl text-primary-500' />
    </div>
  );
}
