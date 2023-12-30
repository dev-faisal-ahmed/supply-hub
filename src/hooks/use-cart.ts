import { useContext } from 'react';
import { CartContext } from '../context-api/cart-provider';

export function useCart() {
  const cartContext = useContext(CartContext);
  if (!cartContext) throw new Error('Can not access this cart');
  return cartContext;
}
