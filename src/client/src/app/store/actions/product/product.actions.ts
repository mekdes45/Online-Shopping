import { createAction, props } from '@ngrx/store';
import { Product } from '../../../../../../shared/models/product.model';

export const loadProducts = createAction(
  '[Product] Load Products'
);

export const loadProductsSuccess = createAction(
  '[Product] Load Products Success',
  props<{ data: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Product] Load Products Failure',
  props<{ error: Error }>()
);

export const createProduct = createAction(
  '[Product] Create Product',
  props<{data: Product}>()
);

export const createProductSuccess = createAction(
  '[Product] Create Product Success',
  props<{ data: Product }>()
);

export const createProductFailure = createAction(
  '[Product] Create Product Failure',
  props<{ error: Error }>()
);
