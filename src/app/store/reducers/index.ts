import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';


export interface State {
}

export const reducers: ActionReducerMap<State> = {
    router: routerReducer
};


