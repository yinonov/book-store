import { Action, createReducer, on, MetaReducer } from '@ngrx/store';
import { updateUser } from '../actions/user.actions';
import { UserState } from '@app/shared/util-models/user-state.interface';
import { userSync } from './user-sync.meta-reducer';
import { environment } from 'src/environments/environment';

export const USER_FEATURE_KEY = 'user';

export const initialState: UserState = {
  name: undefined
};

const userReducer = createReducer(
  initialState,

  on(updateUser, state => state),

);

export function reducer(state: UserState | undefined, action: Action) {
  return userReducer(state, action);
}
