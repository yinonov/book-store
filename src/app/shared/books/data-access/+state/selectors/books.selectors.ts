import { routerQuery } from '@app/shared/router/data-access/selectors/router.selectors';
import { booksDetector } from '@app/shared/books/util-detectors';
import { BooksState } from '@app/shared/util-models';
import { getCallStateSelectors } from '@app/shared/util-state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { booksAdapter, BOOKS_FEATURE_KEY } from '../reducers';

const getBooks = createFeatureSelector<BooksState>(BOOKS_FEATURE_KEY);

const {
    isSingleLoading,
    getSingleError,
    isBatchLoading,
    getBatchError,
} = getCallStateSelectors(getBooks);

const { selectEntities, selectAll } = booksAdapter.getSelectors();

const getBooksDictionary = createSelector(
    getBooks,
    selectEntities,
);

const getBooksList = createSelector(
    getBooks,
    selectAll,
);

const getBookByRoute = createSelector(
    getBooksDictionary,
    routerQuery.getParamsBookId,
    (resources, id) => resources[id],
);

const isBooksLoaded = createSelector(
    getBooksDictionary,
    books => booksDetector('allLoaded')(books),
);

export const booksQuery = {
    isSingleLoading,
    getSingleError,
    isBatchLoading,
    getBatchError,
    getBooksDictionary,
    getBooksList,
    getBookByRoute,
    isBooksLoaded,
};
