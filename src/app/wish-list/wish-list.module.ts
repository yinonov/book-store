import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WishListRoutingModule } from './wish-list-routing.module';
import { WishListFeatureShellComponent } from './wish-list-feature-shell.component';
import { WishListListComponent } from './components/wish-list-list/wish-list-list.component';


@NgModule({
  declarations: [WishListFeatureShellComponent, WishListListComponent],
  imports: [
    CommonModule,
    WishListRoutingModule
  ]
})
export class WishListModule { }
