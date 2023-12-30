import ReactSlider from 'react-slider';
import { twMerge } from 'tailwind-merge';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { max, min } from '../../data/price-data';
import { useAppContext } from '../../hooks/use-app-context';

type PriceFilterProps = { className?: string };

export function PriceFilter({ className }: PriceFilterProps) {
  const minRef = useRef<HTMLInputElement>(null);
  const maxRef = useRef<HTMLInputElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  const [range, setRange] = useState([min, max]);
  const { dispatch } = useAppContext();

  function updateMin(e: ChangeEvent<HTMLInputElement>) {
    const val = Number(e.target.value);

    if (minRef.current && val > range[1]) {
      minRef.current.value = range[0].toString();
      return;
    }

    setRange([val, range[1]]);
  }

  function updateMax(e: ChangeEvent<HTMLInputElement>) {
    const val = Number(e.target.value);
    if (maxRef.current && val < range[0]) {
      maxRef.current.value = range[1].toString();
      return;
    }

    setRange([range[0], val]);
  }

  function handleFiltering(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch({
      type: 'FILTER',
      payload: {
        min: range[0],
        max: range[1],
        keyword: searchRef?.current?.value as string,
      },
    });
  }

  const inputClass = `w-full max-w-[80px] border-gray-300 rounded border text-center outline-none`;

  return (
    <div
      className={twMerge(
        'sticky top-20 h-full w-full max-w-[250px] rounded-md bg-white p-4',
        className,
      )}
    >
      <form onSubmit={handleFiltering}>
        <label
          htmlFor='search'
          className='mb-3 block border-b border-gray-300 pb-1 font-bold uppercase'
        >
          Search KeyWord
        </label>
        <input
          ref={searchRef}
          type='text'
          id='search'
          className='mb-5 block w-full rounded border-2 px-3 py-1 outline-none focus:border-primary-600'
          placeholder='Search...'
        />
        <label
          htmlFor='search'
          className='mb-5 block border-b border-gray-300 pb-1 font-bold uppercase'
        >
          Price
        </label>
        <ReactSlider
          className='slider'
          min={min}
          max={max}
          value={range}
          onChange={setRange}
        />
        <div className='mt-5 flex items-center justify-between'>
          <input
            ref={minRef}
            onChange={updateMin}
            type='number'
            value={range[0]}
            className={inputClass}
          />
          <input
            ref={maxRef}
            onChange={updateMax}
            type='number'
            value={range[1]}
            className={inputClass}
          />
        </div>
        <button className={twMerge('btn-primary', 'mt-8 w-full py-2 text-sm')}>
          Apply
        </button>
      </form>
    </div>
  );
}
