import { twMerge } from 'tailwind-merge';
import { ProductType } from '../utils/types';
import {
  MdOutlineStar,
  MdOutlineStarHalf,
  MdOutlineStarBorder,
} from 'react-icons/md';
import { BsBagPlusFill } from 'react-icons/bs';
import { TbTrashXFilled } from 'react-icons/tb';
import { useCart } from '../hooks/use-cart';

export function ProductCard({
  id,
  title,
  thumbnail,
  price,
  discountPercentage,
  rating,
}: ProductType) {
  const { cart, addToCard, removeFromCart } = useCart();

  const starCount = {
    fullStar: Math.floor(rating),
    halfStar: Math.ceil(rating) > Math.floor(rating),
    emptyStar: 5 - Math.ceil(rating),
  };

  return (
    <div className='flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-lg bg-white'>
      <div className='relative bg-gray-100 p-4'>
        <img
          className='h-40 w-full rounded-md bg-center object-fill transition hover:scale-125'
          src={thumbnail}
        />
        {discountPercentage && (
          <div className='absolute left-4 top-4 z-10 rounded-md bg-red-500 p-1 text-xs text-white'>
            -{discountPercentage}%
          </div>
        )}
        id:{id}{' '}
      </div>
      <div className='p-4'>
        <h2 className='text-lg font-semibold'>{title}</h2>
        <p className='mt-2 font-bold'>
          <span className='text-red-500'>${price}</span>
          {discountPercentage && (
            <span className='ml-3 font-semibold text-gray-500 line-through'>
              ${Math.round(price - (price * discountPercentage) / 100)}
            </span>
          )}
        </p>

        <div className='mt-2 flex items-center'>
          {[...Array(starCount.fullStar)].map((el, index) => (
            <div key={`${el}-${index}`} className='text-orange-300'>
              <MdOutlineStar />
            </div>
          ))}
          {starCount.halfStar && (
            <div className='text-orange-300'>
              <MdOutlineStarHalf />
            </div>
          )}
          {[...Array(starCount.emptyStar)].map((el, index) => (
            <div
              key={`${el}-${index + starCount.fullStar}`}
              className='text-orange-300'
            >
              <MdOutlineStarBorder />
            </div>
          ))}
        </div>
      </div>

      {cart[id] ? (
        <button
          onClick={() => removeFromCart(id)}
          className={twMerge(
            'btn-primary',
            'mt-5 flex w-full items-center justify-center gap-4 rounded-none bg-red-700 hover:bg-red-800',
          )}
        >
          <TbTrashXFilled className='text-lg' />
          Remove From Card
        </button>
      ) : (
        <button
          onClick={() => addToCard(id)}
          className={twMerge(
            'btn-primary',
            'mt-5 flex w-full items-center justify-center gap-4 rounded-none bg-primary-700',
          )}
        >
          <BsBagPlusFill className='text-lg' />
          Add to Cart
        </button>
      )}
    </div>
  );
}
