import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import * as fromReducers from './+state/reducers';
import * as fromEffects from './+state/effects';

@NgModule({
    imports: [
        StoreModule.forFeature(
            fromReducers.WISH_LIST_FEATURE_KEY,
            fromReducers.wishListReducer,
            {
                metaReducers: [fromReducers.wishListSync]
            }),
        EffectsModule.forFeature(fromEffects.effects),
    ],
    providers: [DataPersistence]
})
export class SharedWishListDataAccessModule { }
