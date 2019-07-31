import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing.module';

import { BooksFeatureShellComponent } from './books-feature-shell.component';
import { SharedBooksDataAccessModule } from '../shared/books/data-access/shared-books-data-access.module';
import { BooksFeatureDetailComponent } from './components/books-feature-detail/books-feature-detail.component';
import { BooksListComponent } from './components/books-list/books-list.component';

@NgModule({
  declarations: [BooksFeatureShellComponent, BooksFeatureDetailComponent, BooksListComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    SharedBooksDataAccessModule
  ],
})
export class BooksModule { }
