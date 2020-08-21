import { createReducer, on } from "@ngrx/store";
import { AppState, Product } from "../interface/app.interface";
import { addProductToList, updateReceivedProduct } from "./app.actions";

const initialState: AppState = {
  productsList: [],
};

const _stateReducer = createReducer(
  initialState,
  on(addProductToList, (state, action) => {
    return {
      ...state,
      productsList: [...state.productsList, action],
    };
  }),
  on(updateReceivedProduct, (state, action) => {
    const filterProducts = filterReceivedProduct(state.productsList, action.id)
    console.log(filterProducts)
    return {
      ...state,
      productsList: [...filterProducts]
    }
  })
);

export function stateReducer(state, action) {
  return _stateReducer(state, action);
}

const filterReceivedProduct = (list, id) => {
 const changeReceivedState = list.filter((item) => {
  return item.id === id ? item[isRecieved] = true : null;
  })
  return changeReceivedState
}

