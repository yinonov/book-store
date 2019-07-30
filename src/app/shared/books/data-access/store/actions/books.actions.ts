import { createAction, props } from '@ngrx/store';

export const booksRouteRequestedOneBooks = createAction(
  '[Books/API] Route Requested One Books',
);

export const booksApiOneLoaded = createAction(
  '[Books/API] One Loaded',
  props<{ book: Book }>()
);

export const booksApiOneLoadError = createAction(
  '[Books/API] One Load Error',
  props<{ error: any }>()
);

export const booksRouteRequestedAllBooks = createAction(
  '[Books/API] Route Requested All Books',
);

export const booksApiAllLoaded = createAction(
  '[Books/API] All Loaded',
  props<{ books: Book[] }>()
);

export const booksApiAllLoadError = createAction(
  '[Books/API] All Load Error',
  props<{ error: any }>()
);

