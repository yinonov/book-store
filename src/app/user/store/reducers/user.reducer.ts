import { Action, createReducer, on, MetaReducer } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';
import { environment } from 'src/environments/environment';
import { userSync } from './user-sync';

export const USER_FEATURE_KEY = 'user';

export interface State {
  user: User;
}

export const initialState: State = {
  user: undefined
};

const userReducer = createReducer(
  initialState,

  on(UserActions.updateUser, state => state),

);

export function reducer(state: State | undefined, action: Action) {
  return userReducer(state, action);
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [userSync] : [userSync];
