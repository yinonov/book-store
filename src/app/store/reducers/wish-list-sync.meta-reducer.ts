import { ActionReducer, INIT } from '@ngrx/store';
import { State } from '.';
import { wishListUpdate } from '@app/shared/wish-list/data-access/actions/wish-list.actions';

import { WISH_LIST_FEATURE_KEY } from '@app/shared/wish-list/data-access/reducers/wish-list.reducer';

export function wishListSync(r: ActionReducer<State>): ActionReducer<State> {
    return (state, action) => {

        let reducedState = r(state, action);

        if (action.type === INIT) {
            const wishList = window.localStorage.getItem(WISH_LIST_FEATURE_KEY);
            if (wishList) {
                reducedState = { ...state, [WISH_LIST_FEATURE_KEY]: JSON.parse(wishList) };
                console.log('im here', reducedState);
            }
        } else if (action.type === wishListUpdate.type) {
            window.localStorage.setItem(WISH_LIST_FEATURE_KEY,
                JSON.stringify(state[WISH_LIST_FEATURE_KEY]));
        }

        return reducedState;
    };
}
