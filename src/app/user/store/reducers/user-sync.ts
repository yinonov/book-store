import { ActionReducer, INIT, createReducer, on } from '@ngrx/store';
import * as userActions from '../actions/user.actions';
import * as userReducer from '../reducers/user.reducer';

export function userSync(reducer: ActionReducer<userReducer.State>): ActionReducer<userReducer.State> {
    return (state, action) => {

        let reducedState = reducer(state, action);

        // console.log(action.type, INIT)
        if (action.type === INIT) {
            const user = window.localStorage.getItem('user');
            if (user) {
                reducedState = { ...state, user: JSON.parse(user) };
            }
        } else if (action.type === userActions.updateUser.type) {
            // window.localStorage.setItem('user', JSON.stringify(action.data.user))
        }
        // console.log('state', state);
        // console.log('action', action);

        return reducedState;
    };
}

