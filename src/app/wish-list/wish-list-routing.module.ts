import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WishListFeatureShellComponent } from './wish-list-feature-shell.component';


const routes: Routes = [{
  path: '', component: WishListFeatureShellComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WishListRoutingModule { }
