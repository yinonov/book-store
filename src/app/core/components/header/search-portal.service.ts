import { Injectable } from '@angular/core';
import { Portal, ComponentPortal } from '@angular/cdk/portal';

@Injectable({
  providedIn: 'root'
})
export class SearchPortalService {
  componentPortal: ComponentPortal<any>;

  constructor() { }
}
