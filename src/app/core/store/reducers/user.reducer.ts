import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';

export interface State {
  name: string;
}

export const initialState: State = {
  name: undefined
};

const userReducer = createReducer(
  initialState,

  on(UserActions.updateUser, state => state),

);

export function reducer(state: State | undefined, action: Action) {
  return userReducer(state, action);
}
