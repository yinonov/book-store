import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedBooksDataAccessService {

  constructor() { }

  getAllBooks() {
    return of([
      {
        id: 'j8349',
        title: 'The Guest'
      },
      {
        id: '54uhd',
        title: 'Twilights'
      },
      {
        id: 'y3v34',
        title: 'Desert Mackaw'
      }
    ]);
  }

  getBook(id: Book['id']) {
    return of({
      id: 'j8349',
      title: 'The Guest'
    });
  }

}
