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
  | { type: 'REMOVE_FROM_CART'; payload: { id: number } };

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
