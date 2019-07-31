import * as fromBooksActions from '../actions/books.actions';

export const booksCallStateTriggers = {
    single: {
        loading: [fromBooksActions.booksDetailRouteRequestedOneBook.type],
        resting: [fromBooksActions.booksApiOneLoaded.type],
        erroring: [fromBooksActions.booksApiOneLoadError.type],
    },
    batch: {
        loading: [fromBooksActions.booksRouteRequestedAllBooks.type],
        resting: [fromBooksActions.booksApiAllLoaded.type],
        erroring: [fromBooksActions.booksApiAllLoadError.type],
    },
};
