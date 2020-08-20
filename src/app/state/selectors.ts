import { createSelector } from '@ngrx/store';

const stateProductList = (state: any) => state.productsList;

export const selectProductList = createSelector(
  stateProductList,
  (state) => state
);