import { Component, OnInit } from '@angular/core';
import { BooksFacade } from '@app/shared/books/books.facade';

@Component({
  templateUrl: './books-feature-detail.component.html',
  styleUrls: ['./books-feature-detail.component.scss']
})
export class BooksFeatureDetailComponent implements OnInit {

  constructor(public booksFacade: BooksFacade) { }

  ngOnInit() {
  }

}
