import { WishListState } from '@app/shared/util-models';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { wishListAdapter, WISH_LIST_FEATURE_KEY } from '../reducers';

const getWishList = createFeatureSelector<WishListState>(WISH_LIST_FEATURE_KEY);

const { selectEntities, selectAll } = wishListAdapter.getSelectors();

const getWishListDictionary = createSelector(
    getWishList,
    selectEntities,
);

const getWishListList = createSelector(
    getWishList,
    selectAll,
);

export const wishListQuery = {
    getWishListDictionary,
    getWishListList
};
