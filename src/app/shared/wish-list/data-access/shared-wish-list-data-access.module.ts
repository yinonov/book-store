import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import * as fromReducers from './reducers/wish-list.reducer';
import * as fromEffects from './effects';

@NgModule({
    imports: [
        StoreModule.forFeature(fromReducers.WISH_LIST_FEATURE_KEY, fromReducers.wishListReducer),
        EffectsModule.forFeature(fromEffects.effects),
    ],
    providers: [DataPersistence]
})
export class SharedWishListDataAccessModule { }
