import { ActionReducer, INIT, createReducer, on } from '@ngrx/store';
import * as fromCore from './index';
import * as UserActions from '../actions/user.actions';

export function userSync(reducer: ActionReducer<fromCore.State>): ActionReducer<fromCore.State> {
    return (state, action) => {

        let reducedState = reducer(state, action);

        if (action.type === INIT) {
            const user = window.localStorage.getItem('user');
            if (user) {
                reducedState = { ...state, user: JSON.parse(user) };
            }
        } else if (action.type === UserActions.UPDATE) {
            window.localStorage.setItem('user', JSON.stringify(action.data.user))
        }
        // console.log('state', state);
        // console.log('action', action);

        return reducedState;
    };
}

