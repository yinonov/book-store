import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <app-books-list></app-books-list>
    <router-outlet></router-outlet>
  `
})
export class BooksFeatureShellComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
