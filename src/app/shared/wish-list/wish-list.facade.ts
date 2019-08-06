import { AppState } from '@app/shared/util-models';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { wishListQuery } from './data-access/selectors/wish-list.selectors';
import * as fromActions from './data-access/actions/wish-list.actions';

@Injectable({
    providedIn: 'root'
})
export class WishListFacade {
    dictionary$ = this.store.pipe(select(wishListQuery.getWishListDictionary));
    list$ = this.store.pipe(select(wishListQuery.getWishListList));
    add = (wish: Wish) => this.store.dispatch(fromActions.wishListAddOne({ wish }));
    remove = (wish: Wish) => this.store.dispatch(fromActions.wishListRemoveOne({ wish }));

    constructor(private store: Store<AppState>) { }
}
