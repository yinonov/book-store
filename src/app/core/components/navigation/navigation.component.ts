import { Component, OnInit } from '@angular/core';

interface MenuItem {
  name: string;
  path: string;
  icon: string;
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  menu: MenuItem[] = [
    {
      name: 'Books',
      path: '/books',
      icon: 'book'
    },
    {
      name: 'Wish List',
      path: '/wishList',
      icon: 'heart'
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
