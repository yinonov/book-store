import { Component, OnInit } from '@angular/core';
import { UserFacade } from '@app/shared/user/user.facade';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public userFacade: UserFacade) { }

  ngOnInit() {
  }

}
