import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromStore from './store/reducers';
import { EffectsModule } from '@ngrx/effects';

import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { StoreRouterConnectingModule } from '@ngrx/router-store';



@NgModule({
  declarations: [],
  imports: [
    StoreModule.forRoot(fromStore.reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    // Connects RouterModule with StoreModule
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ]
})
export class StateStoreModule { }
