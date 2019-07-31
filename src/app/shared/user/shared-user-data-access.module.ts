import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromUser from './data-access/reducers/user.reducer';

@NgModule({
  declarations: [],
  imports: [
    StoreModule.forFeature(fromUser.USER_FEATURE_KEY, fromUser.reducer),
  ]
})
export class SharedUserDataAccessModule { }
