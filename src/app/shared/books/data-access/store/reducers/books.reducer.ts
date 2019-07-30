import { baseReducer } from './base.reducer';
import { callStateReducer } from 'src/app/shared/util-state';
import { BooksState } from 'src/app/shared/util-models';
import { booksCallStateTriggers } from '../triggers/books-call-state.triggers';
import { Action } from '@ngrx/store';

export const BOOKS_FEATURE_KEY = 'books';

export function booksReducer(state: BooksState, action: Action) {
    return callStateReducer(baseReducer, booksCallStateTriggers)(state, action);
}
