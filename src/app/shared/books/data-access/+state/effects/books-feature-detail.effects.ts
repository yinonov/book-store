import * as fromBooksActions from '../actions/books.actions';
import { booksDetector } from '@app/shared/books/util-detectors';
import { AppState } from '@app/shared/util-models';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { BooksFeatureDetailComponent } from '@books/containers/books-feature-detail/books-feature-detail.component';

@Injectable()
export class BooksFeatureDetailEffects {
    @Effect() booksDetailNavigationEffect$ = this.dataPersistence.navigation(
        BooksFeatureDetailComponent,
        {
            run({ params: { bookId: id } }: ActivatedRouteSnapshot, s: AppState) {
                if (booksDetector('notLoaded')(s.books.entities, id)) {
                    return fromBooksActions.booksDetailRouteRequestedOneBook({ id });
                }
            },
        },
    );

    constructor(private dataPersistence: DataPersistence<AppState>) { }
}
