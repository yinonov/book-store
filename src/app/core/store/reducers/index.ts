import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import * as fromUser from './user.reducer';
import { userSync } from './user-sync';

export interface State {
  user: fromUser.State;
}

export const reducers: ActionReducerMap<State> = {
  user: fromUser.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [userSync] : [userSync];
