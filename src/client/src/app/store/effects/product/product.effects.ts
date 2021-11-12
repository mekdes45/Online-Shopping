import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ProductService } from 'src/app/services/product.service';
import { loadProducts, loadProductsSuccess, loadProductsFailure, createProduct, createProductSuccess, createProductFailure } from '../../actions/product/product.actions';



@Injectable()
export class ProductEffects {


  loadProducts$ = createEffect(() =>
  this.actions$.pipe(
    ofType(loadProducts),
    mergeMap(() =>
      this.productService.getProducts().pipe(
        map((data) => loadProductsSuccess({ data })),
        catchError((error) => of(loadProductsFailure({ error })))
      )
    )
  )
  );
  
  createProduct$ = createEffect(() =>
  this.actions$.pipe(
    ofType(createProduct),
    mergeMap((action) =>
      this.productService.createProduct(action.data).pipe(
        map((data) => createProductSuccess({ data })),
        catchError((error) => of(createProductFailure({ error })))
      )
    )
  )
);


  constructor(private actions$: Actions, private productService: ProductService) {}

}
