import { Injectable } from '@angular/core';
import { of } from 'rxjs';

const books = [
  {
    id: '12',
    title: 'Where the Crawdads Sing'
  },
  {
    id: '13',
    title: 'Sapiens: A Brief History of Humankind'
  },
  {
    id: '14',
    title: 'Unfreedom of the Press'
  }
];

@Injectable({
  providedIn: 'root'
})
export class SharedBooksDataAccessService {

  constructor() { }

  getAllBooks() {
    return of(books);
  }

  getBook(id: Book['id']) {
    return of(books.find(book => book.id === id));
  }

}
