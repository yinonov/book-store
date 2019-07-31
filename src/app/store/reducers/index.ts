import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { environment } from 'src/environments/environment';
import { userSync } from './user-sync.meta-reducer';

export interface State { }

export const reducers: ActionReducerMap<State> = {
    router: routerReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [userSync] : [userSync];
