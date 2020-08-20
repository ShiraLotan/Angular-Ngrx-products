import { createReducer, on } from "@ngrx/store";
import { AppState, Product } from "../interface/app.interface";
import { addProductToList } from "./app.actions";

const initialState: AppState = {
  productsList: [],
  storesList: [],
};

const _stateReducer = createReducer(
  initialState,
  on(addProductToList, (state, action) => {
    console.log(action);
    return {
      ...state,
      productsList: [...state.productsList, action],
    };
  })
);

export function stateReducer(state, action) {
  return _stateReducer(state, action);
}
// export const productReducer = createReducer(
//   initialState.productsList,
//   on(addProductToList, (state, product) => ({
//     ...state,
//     productsList: [...state, product],
//   }))
// );
