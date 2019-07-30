import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books-routing.module';

import { BooksFeatureShellComponent } from './books-feature-shell.component';
import { SharedBooksDataAccessModule } from '../shared/books/data-access/shared-books-data-access.module';

@NgModule({
  declarations: [BooksFeatureShellComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    SharedBooksDataAccessModule
  ],
})
export class BooksModule { }
