import * as fromBooksActions from '../actions/books.actions';
import { AppState } from '@shared/util-models';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { BooksFeatureShellComponent } from 'src/app/books/books-feature-shell.component';
import { booksDetector } from '@app/shared/books/util-detectors';

@Injectable()
export class BooksFeatureShellEffects {
    @Effect() booksNavigationEffect = this.dataPersistence.navigation(
        BooksFeatureShellComponent,
        {
            run(a: ActivatedRouteSnapshot, state: AppState) {
                if (booksDetector('noneLoaded')(state.books.entities)) {
                    return fromBooksActions.booksRouteRequestedAllBooks();
                }
            },
        },
    );

    constructor(private dataPersistence: DataPersistence<AppState>) { }
}
