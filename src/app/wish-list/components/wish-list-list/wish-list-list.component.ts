import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-wish-list-list',
  templateUrl: './wish-list-list.component.html',
  styleUrls: ['./wish-list-list.component.css']
})
export class WishListListComponent {
  @Input() list: Wish[];
  @Output() remove: EventEmitter<Wish> = new EventEmitter();

  constructor() { }

  onRemove(wish: Wish) {
    this.remove.emit(wish);
  }

}
