import { ActionReducer } from '@ngrx/store';

import { updateUser } from '@app/shared/user/data-access/+state/actions/user.actions';

import { USER_FEATURE_KEY } from '@app/shared/user/data-access/+state/reducers/user.reducer';

import { UserState } from '@app/shared/util-models';

export function userSync(r: ActionReducer<UserState>): ActionReducer<UserState> {

    let firstRun = true;

    return (state, action) => {

        let reducedState = r(state, action);

        if (firstRun) {

            firstRun = false;

            const data = window.localStorage.getItem(USER_FEATURE_KEY);
            if (data) {
                reducedState = JSON.parse(data);
            }

        } else if (action.type === updateUser.type) {
            window.localStorage.setItem(USER_FEATURE_KEY,
                JSON.stringify(state));
        }

        return reducedState;
    };

}