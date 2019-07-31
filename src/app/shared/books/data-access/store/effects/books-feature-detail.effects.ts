import * as fromBooksActions from '../actions/books.actions';
import { booksDetector } from '@app/shared/books/util-detectors';
import { AppState } from '@app/shared/util-models';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { BooksFeatureDetailComponent } from '@books/books-feature-detail.component';

@Injectable()
export class BooksFeatureDetailEffects {
    @Effect() booksDetailNavigationEffect$ = this.dataPersistence.navigation(
        BooksFeatureDetailComponent,
        {
            run(a: ActivatedRouteSnapshot, s: AppState) {
                if (booksDetector('notLoaded')(s.books.entities, a.params.id)) {
                    return fromBooksActions.booksDetailRouteRequestedOneBook(a.params.id);
                }
            },
        },
    );

    constructor(private dataPersistence: DataPersistence<AppState>) { }
}