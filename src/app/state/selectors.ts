import { createSelector } from '@ngrx/store';
import { AppState } from '../interface/app.interface';

const stateProductList = (state: AppState) => state;

export const selectProductList = createSelector(
  stateProductList,
  (state) => state
);

export const selectRecievedProductList = createSelector(
  stateProductList,
  (state) => {
    return state
  }
);