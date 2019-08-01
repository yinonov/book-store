import { Action, createReducer, on } from '@ngrx/store';
import { EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as wishListActions from '../actions/wish-list.actions';
import { WishListState } from 'src/app/shared/util-models';

export const wishListAdapter: EntityAdapter<Wish> = createEntityAdapter<Wish>();

export const wishListInitialState: WishListState = wishListAdapter.getInitialState();

const wishListReducer = createReducer(
  wishListInitialState,

  on(wishListActions.wishListAllLoad,
    (state, action) => wishListAdapter.addAll(action.wishList, state)
  ),

  on(wishListActions.wishListAddOne,
    (state, action) => wishListAdapter.addOne(action.wish, state)
  ),

  on(wishListActions.wishListRemoveOne,
    (state, action) => wishListAdapter.removeOne(action.wish.id, state)
  ),

);

export function baseReducer(state: WishListState | undefined, action: Action) {
  return wishListReducer(state, action);
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = wishListAdapter.getSelectors();
