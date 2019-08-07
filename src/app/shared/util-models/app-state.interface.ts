import { BooksState } from './books-state.interface';
import { BOOKS_FEATURE_KEY } from '../books/data-access/+state/reducers/books.reducer';
import { WishListState } from './wish-list-state.interface';
import { WISH_LIST_FEATURE_KEY } from '../wish-list/data-access/+state/reducers';

export interface AppState {
    [BOOKS_FEATURE_KEY]: BooksState;
    [WISH_LIST_FEATURE_KEY]: WishListState;
}
