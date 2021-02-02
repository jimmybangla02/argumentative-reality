import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd  } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  nav = [
    {name: 'Dashboard', path: '/dashboard'}
  ];

  user = 'John Adam';

  currentRouter: string;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    this.router.events.subscribe((selectedPage: any) => {
      if (selectedPage && selectedPage.url) {
        this.currentRouter = selectedPage.url;
      }
    });
  }

  getUser(user) {
    // const res = user.substring(0, 2);
    return user;
  }

}
