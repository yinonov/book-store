import { ActionReducer, INIT } from '@ngrx/store';
import { State } from '.';
import { updateUser } from '@app/shared/user/data-access/actions/user.actions';

import { USER_FEATURE_KEY } from '@app/shared/user/data-access/reducers/user.reducer';

export function userSync(r: ActionReducer<State>): ActionReducer<State> {
    return (state, action) => {

        let reducedState = r(state, action);

        if (action.type === INIT) {
            const user = window.localStorage.getItem(USER_FEATURE_KEY);
            if (user) {
                reducedState = { ...state, [USER_FEATURE_KEY]: JSON.parse(user) };
            }
        } else if (action.type === updateUser.type) {
            window.localStorage.setItem(USER_FEATURE_KEY, JSON.stringify((action as any).user));
        }
        // console.log('state', state);
        // console.log('action', action);

        return reducedState;
    };
}
