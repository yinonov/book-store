import { AppState } from '@app/shared/util-models';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { userQuery } from './data-access/selectors/user.selectors';

@Injectable({
    providedIn: 'root'
})
export class UserFacade {
    getUserName$ = this.store.pipe(select(userQuery.getUserName));

    constructor(private store: Store<AppState>) { }
}
