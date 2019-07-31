import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BooksFeatureShellComponent } from './books-feature-shell.component';
import { BooksFeatureDetailComponent } from './components/books-feature-detail/books-feature-detail.component';

const routes: Routes = [
  {
    path: '', component: BooksFeatureShellComponent, children: [
      { path: ':bookId', component: BooksFeatureDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
