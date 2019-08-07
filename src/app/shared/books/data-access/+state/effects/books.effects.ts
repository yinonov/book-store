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
            run: (action: any, state: AppState) =>
                this.booksService
                    .getAllBooks()
                    .pipe(map(books => fromBooksActions.booksApiAllLoaded({ books }))),

            onError: (
                action: any,
                error: HttpErrorResponse,
            ) => fromBooksActions.booksApiAllLoadError(error),
        },
    );

    @Effect() loadOneBookEffect$ = this.dataPersistence.fetch(
        fromBooksActions.booksDetailRouteRequestedOneBook.type,
        {
            run: (action: any, state: AppState) =>
                this.booksService
                    .getBook(action.id)
                    .pipe(map(book => fromBooksActions.booksApiOneLoaded({ book }))),

            onError: (
                action: any,
                error: HttpErrorResponse,
            ) => fromBooksActions.booksApiOneLoadError(error),
        },
    );

    constructor(
        private dataPersistence: DataPersistence<AppState>,
        private booksService: SharedBooksDataAccessService,
    ) { }
}

// ! In order to be able to type my actions,
// ! so I can use their payload on the run/onError methods,
// ! I need to do ReturnType
// ! https://github.com/nrwl/nx/issues/1566
