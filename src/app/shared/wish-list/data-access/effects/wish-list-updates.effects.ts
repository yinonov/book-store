import { AppState, WishListState } from '@shared/util-models';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Effect } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { BooksFeatureShellComponent } from 'src/app/books/books-feature-shell.component';
import { booksDetector } from '@app/shared/books/util-detectors';
import * as fromWishListActions from '../actions/wish-list.actions';

@Injectable()
export class WishListUpdatesEffects {

    @Effect() updateWishList = this.dataPersistence.optimisticUpdate(
        fromWishListActions.wishListAddOne.type,
        {
            // provides an action and the current state of the store
            run: (a: any, state: AppState) => {
                return fromWishListActions.wishListUpdate();
            },

            undoAction: (a: any, e: any) => {
                // TODO dispatch an undo action to undo the changes in the client state
                return {
                    type: 'UNDO_UPDATE_TODO', // ! not relevant, needs a change
                    payload: a
                };
            }
        });

    constructor(private dataPersistence: DataPersistence<AppState>) { }
}
