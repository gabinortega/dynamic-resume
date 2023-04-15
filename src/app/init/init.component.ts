import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.scss'],
  providers: [],
})
export class InitComponent implements OnInit {
  items: MenuItem[] = [];
  activeIndex: number = 0;

  constructor() {}

  onActiveIndexChange(event: number) {
    this.activeIndex = event;
  }

  ngOnInit() {
    this.items = [
      {
        label: 'Personal',
        routerLink: 'personal',
      },
      {
        label: 'Location',
        routerLink: 'location',
      },
      {
        label: 'Profile',
        routerLink: 'profile',
      },
      {
        label: 'Education',
        routerLink: 'education',
      },
      {
        label: 'Employment',
        routerLink: 'employment',
      },
      {
        label: 'Summary',
        routerLink: 'summary',
      },
    ];
  }
}
