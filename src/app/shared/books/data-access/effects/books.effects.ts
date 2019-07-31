import { AppState } from '@app/shared/util-models';
import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { map } from 'rxjs/operators';
import { SharedBooksDataAccessService } from '@shared/books/shared-books-data-access.service';
import * as fromBooksActions from '../actions/books.actions';

@Injectable()
export class BooksEffects {
    @Effect() loadAllBooksEffect$ = this.dataPersistence.fetch(
        fromBooksActions.booksRouteRequestedAllBooks.type,
        {
            run: (action: typeof fromBooksActions.booksRouteRequestedAllBooks, state: AppState) =>
                this.booksService
                    .getAllBooks()
                    .pipe(map(books => fromBooksActions.booksApiAllLoaded({ books }))),

            onError: (
                action: typeof fromBooksActions.booksRouteRequestedAllBooks,
                error: HttpErrorResponse,
            ) => fromBooksActions.booksApiAllLoadError(error),
        },
    );

    @Effect() loadOneBookEffect$ = this.dataPersistence.fetch(
        fromBooksActions.booksDetailRouteRequestedOneBook.type,
        {
            run: (action: typeof fromBooksActions.booksDetailRouteRequestedOneBook, state: AppState) =>
                this.booksService
                    .getBook(action)
                    .pipe(map(book => fromBooksActions.booksApiOneLoaded({ book }))),

            onError: (
                action: typeof fromBooksActions.booksDetailRouteRequestedOneBook,
                error: HttpErrorResponse,
            ) => fromBooksActions.booksApiOneLoadError(error),
        },
    );

    constructor(
        private dataPersistence: DataPersistence<AppState>,
        private booksService: SharedBooksDataAccessService,
    ) { }
}