import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import * as fromCore from './store/reducers';
import { EffectsModule } from '@ngrx/effects';

import { environment } from '../../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(fromCore.reducers, {
      metaReducers: fromCore.metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forFeature([])
  ]
})
export class CoreModule { }
