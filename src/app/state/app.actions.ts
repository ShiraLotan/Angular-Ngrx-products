import { createAction, props } from '@ngrx/store';
import { Product } from '../interface/app.interface';

export const addProductToList = createAction(
    '[Product] Add Product To List',
    props<{product: Product}>()
    );
