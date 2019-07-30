import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksFeatureShellComponent } from './books-feature-shell.component';

const routes: Routes = [{ path: '', component: BooksFeatureShellComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
