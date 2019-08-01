import { Component } from '@angular/core';
import { WishListFacade } from '@app/shared/wish-list/wish-list.facade';

@Component({
  template: `
    <app-wish-list-list [list]="wishListFacade.list$ | async" (remove)="onRemove($event)"></app-wish-list-list>
  `,
})
export class WishListFeatureShellComponent {

  constructor(public wishListFacade: WishListFacade) { }

  onRemove(wish: Wish) {
    this.wishListFacade.remove(wish);
  }

}
