import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { StateStoreModule } from './store/state-store.module';
import { SharedUserDataAccessModule } from './shared/user/shared-user-data-access.module';
import { SharedWishListDataAccessModule } from './shared/wish-list/data-access/shared-wish-list-data-access.module';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StateStoreModule,
    SharedUserDataAccessModule,
    SharedWishListDataAccessModule,
    CoreModule,
    ClarityModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
