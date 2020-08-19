import { createReducer, on, createAction, createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../interface/app.interface';
import { addProductToList } from './app.actions';

const initialState: AppState = {
    productsList: [],
    storesList: []
}

const stateProductList = (state: AppState) => state;

export const selectProductList = createSelector(
    stateProductList,
    (state: AppState) => state.productsList
  );
export const selectStoresList = createSelector(
    stateProductList,
    (state: AppState) => state.storesList
  );


export const productReducer = createReducer<AppState>(
    initialState,
    on( addProductToList, (state, action): AppState => {
        return {
            ...state,
            productsList: [action.product]
        }
    })
)