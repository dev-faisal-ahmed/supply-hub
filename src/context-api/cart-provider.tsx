import { ReactNode, createContext, useState } from 'react';
import { CartType } from '../utils/types';

type CartContextType = {
  cart: CartType;
  addToCard(id: number): void;
  removeFromCart(id: number): void;
};

export const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartType>({});

  function addToCard(id: number) {
    setCart({ ...cart, [id]: true });
  }

  function removeFromCart(id: number) {
    setCart((prevCart) => {
      const tempCart = prevCart;
      delete tempCart[id];
      return { ...tempCart };
    });
  }

  return (
    <CartContext.Provider value={{ cart, addToCard, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}
