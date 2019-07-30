import { Action, createReducer, on } from '@ngrx/store';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as booksActions from '../actions/books.actions';
import { initialCallState } from '../../../../util-state';
import { BooksState } from 'src/app/shared/util-models';

export const booksAdapter: EntityAdapter<Book> = createEntityAdapter<Book>();

export const booksInitialState: BooksState = booksAdapter.getInitialState(
  initialCallState,
);

const booksReducer = createReducer(
  booksInitialState,

  on(booksActions.booksApiAllLoaded,
    (state, action) => booksAdapter.addAll(action.books, state)
  ),
  on(booksActions.booksApiOneLoaded,
    (state, action) => booksAdapter.addOne(action.book, state)
  ),

);

export function baseReducer(state: BooksState | undefined, action: Action) {
  return booksReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = booksAdapter.getSelectors();
