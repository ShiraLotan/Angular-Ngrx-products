import {
  createReducer,
  on,
  createAction,
  createFeatureSelector,
  createSelector,
} from "@ngrx/store";
import { AppState, Product } from "../interface/app.interface";
import { addProductToList } from "./app.actions";

const initialState: AppState = {
  productsList: [],
  storesList: [],
};

const stateProductList = (state: AppState) => state;

export const selectProductList = createSelector(
  stateProductList,
  (state: AppState) => state.productsList
);

export const productReducer = createReducer(
  initialState.productsList,
  on(addProductToList, (state, product) => ({
    ...state,
    productsList: [...state, product],
  }))
);
