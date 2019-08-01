import { Component } from '@angular/core';
import { WishListFacade } from '@app/shared/wish-list/wish-list.facade';

@Component({
  templateUrl: './wish-list-feature-shell.component.html',
  styleUrls: ['./wish-list-feature-shell.component.scss']
})
export class WishListFeatureShellComponent {

  constructor(public wishListFacade: WishListFacade) { }

  onRemove(wish: Wish) {
    this.wishListFacade.remove(wish);
  }

}
