import { BooksState } from './books-state.interface';
import { BOOKS_FEATURE_KEY } from '../books/data-access/reducers/books.reducer';

export interface AppState {
    [BOOKS_FEATURE_KEY]: BooksState;
}
