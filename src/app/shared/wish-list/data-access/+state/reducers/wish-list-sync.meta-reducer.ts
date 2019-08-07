import { ActionReducer } from '@ngrx/store';

import { wishListUpdate } from '@app/shared/wish-list/data-access/+state/actions/wish-list.actions';

import { WISH_LIST_FEATURE_KEY } from '@app/shared/wish-list/data-access/+state/reducers/wish-list.reducer';
import { WishListState } from '@app/shared/util-models';


export function wishListSync(r: ActionReducer<WishListState>): ActionReducer<WishListState> {

    let firstRun = true;

    return (state, action) => {

        let reducedState = r(state, action);

        if (firstRun) {

            firstRun = false;

            const data = window.localStorage.getItem(WISH_LIST_FEATURE_KEY);
            if (data) {
                reducedState = JSON.parse(data);
            }

        } else if (action.type === wishListUpdate.type) {
            window.localStorage.setItem(WISH_LIST_FEATURE_KEY,
                JSON.stringify(state));
        }

        return reducedState;
    };

}
