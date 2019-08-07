import { baseReducer } from './base.reducer';
import { WishListState } from 'src/app/shared/util-models';
import { Action } from '@ngrx/store';

export const WISH_LIST_FEATURE_KEY = 'wishList';

export function wishListReducer(state: WishListState, action: Action) {
    return baseReducer(state, action);
}

