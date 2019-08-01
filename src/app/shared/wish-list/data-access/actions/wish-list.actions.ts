import { createAction, props } from '@ngrx/store';

export const wishListAllLoad = createAction(
  '[Wish List] All Load',
  props<{ wishList: Wish[] }>()
);

export const wishListAddOne = createAction(
  '[Wish List] Add One',
  props<{ wish: Wish }>()
);

export const wishListRemoveOne = createAction(
  '[Wish List] Remove One',
  props<{ wish: Wish }>()
);

export const wishListUpdate = createAction(
  '[Wish List] Update',
);
