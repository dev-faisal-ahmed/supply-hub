import { Dispatch, createContext, useReducer } from 'react';
import { CartType, ProductType, WrapperType } from '../utils/types';

type GlobalStateType = {
  allProducts: ProductType[];
  selectedProducts: ProductType[];
  cart: CartType;
};

const initialState: GlobalStateType = {
  allProducts: [],
  selectedProducts: [],
  cart: {},
};

type ActionType =
  | { type: 'UPDATE_ALL_PRODUCTS'; payload: ProductType[] }
  | { type: 'UPDATE_SELECTED_PRODUCTS'; payload: ProductType[] }
  | { type: 'ADD_TO_CART'; payload: { id: number } }
  | { type: 'REMOVE_FROM_CART'; payload: { id: number } }
  | { type: 'FILTER'; payload: { keyword: string; min: number; max: number } }
  | { type: 'RESET_FILTER' };

function reducer(state: GlobalStateType, action: ActionType) {
  switch (action.type) {
    case 'UPDATE_ALL_PRODUCTS':
      return { ...state, allProducts: action.payload };

    case 'UPDATE_SELECTED_PRODUCTS':
      return { ...state, selectedProducts: action.payload };

    case 'ADD_TO_CART':
      return {
        ...state,
        cart: { ...state.cart, [action.payload.id]: true },
      };

    case 'REMOVE_FROM_CART': {
      const tempCart = { ...state.cart };
      delete tempCart[action.payload.id];
      return {
        ...state,
        cart: tempCart,
      };
    }

    case 'FILTER': {
      const { keyword, max, min } = action.payload;
      const searchRegex = new RegExp(
        keyword
          .split(' ')
          .filter((key) => key.length >= 2)
          .join('|'),
        'i',
      );
      const tempProducts = state.allProducts.filter(
        (product) =>
          searchRegex.test(product.title) &&
          product.price >= min &&
          product.price <= max,
      );
      return { ...state, selectedProducts: tempProducts };
    }

    case 'RESET_FILTER':
      return {
        ...state,
        selectedProducts: state.allProducts,
      };
  }
}

export const AppContext = createContext<{
  state: GlobalStateType;
  dispatch: Dispatch<ActionType>;
} | null>(null);

export function AppProvider({ children }: WrapperType) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
