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
      const tempProducts = state.allProducts.filter(
        (product) =>
          product.title.toLocaleLowerCase().includes(keyword) &&
          product.price >= min &&
          product.price <= max,
      );
      return { ...state, selectedProducts: tempProducts };
    }

    // case 'SEARCH_PRODUCTS': {
    //   if (action.payload.keyword.trim().length === 0)
    //     return { ...state, selectedProducts: state.allProducts };
    //   const tempNewProducts = state.allProducts.filter((product) =>
    //     product.title
    //       .toLocaleLowerCase()
    //       .includes(action.payload.keyword.toLocaleLowerCase()),
    //   );
    //   return { ...state, selectedProducts: tempNewProducts };
    // }

    // case 'FILTER_ON_PRICE': {
    //   const { min, max } = action.payload;
    //   const tempProducts = state.selectedProducts.filter(
    //     (product) => product.price >= min && product.price <= max,
    //   );
    //   return { ...state, selectedProducts: tempProducts };
    // }

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
