import { createReducer, on } from "@ngrx/store";
import { AppState } from "../interface/app.interface";
import { addProductToList, updateReceivedProduct } from "./product.actions";


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
    const newList = filterReceivedProduct(state, action.id)
    return {
      productsList: [...newList]
    }
  })
);

export function stateReducer(state, action) {
  return _stateReducer(state, action);
}

const filterReceivedProduct = (list, id) => {
  const filtered = list.productsList.map(item => {
    if (item.id === id) return { ...item, isRecieved: item.id === id };
    return item;
  });
  return filtered;
}




