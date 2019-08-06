import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { environment } from 'src/environments/environment';
import { userSync } from './user-sync.meta-reducer';
import { wishListSync } from './wish-list-sync.meta-reducer';

export interface State {
    router: RouterReducerState;
}

export const reducers: ActionReducerMap<State> = {
    router: routerReducer
};

export const metaReducers: MetaReducer<State>[] = [
    userSync,
    wishListSync,
    ...(!environment.production
        ? []
        : [])];
