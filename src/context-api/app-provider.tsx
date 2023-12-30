import { Dispatch, ReactNode, createContext, useReducer } from 'react';
import { CartProductType, CartType, ProductType } from '../utils/types';

type GlobalStateType = {
  allProducts: CartProductType[];
  selectedProducts: ProductType[];
  searchKeyword: string;
  cart: CartType;
};

const initialState: GlobalStateType = {
  allProducts: [],
  selectedProducts: [],
  searchKeyword: '',
  cart: [],
};

type ActionType =
  | { type: 'UPDATE_ALL_PRODUCTS'; payload: ProductType[] }
  | { type: 'UPDATE_SELECTED_PRODUCTS'; payload: ProductType[] }
  | { type: 'ADD_TO_CART'; payload: { key: number; data: CartProductType } }
  | { type: 'REMOVE_FROM_CART'; payload: { id: number } };

function reducer(state: GlobalStateType, action: ActionType) {
  switch (action.type) {
    case 'UPDATE_ALL_PRODUCTS':
      return {
        ...state,
        allProducts: action.payload,
      };
    case 'UPDATE_SELECTED_PRODUCTS':
      return {
        ...state,
        selectedProducts: action.payload,
      };
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: { ...state.cart, [action.payload.key]: action.payload.data },
      };
    case 'REMOVE_FROM_CART': {
      delete state.cart[action.payload.id];
      return { ...state };
    }
  }
}

export const AppContext = createContext<{
  state: GlobalStateType;
  dispatch: Dispatch<ActionType>;
} | null>(null);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};
