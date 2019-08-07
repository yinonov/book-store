import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromUserReducers from './data-access/+state/reducers';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(
      fromUserReducers.USER_FEATURE_KEY,
      fromUserReducers.reducer,
      {
        metaReducers: [fromUserReducers.userSync]
      }),
  ]
})
export class SharedUserDataAccessModule { }
