import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router) {}

  onActiveIndexChange(event: number) {
    this.activeIndex = event;
    console.log('onActiveIndexChange', this.activeIndex);
  }

  onPrevStep() {
    if (this.activeIndex > 0) this.activeIndex--;
    this.changeLocation(this.items[this.activeIndex].routerLink);
  }

  onNextStep() {
    if (this.activeIndex < this.items.length - 1) this.activeIndex++;
    this.changeLocation(this.items[this.activeIndex].routerLink);
  }

  changeLocation(newLocation: string) {
    this.router.navigate([`init/${newLocation}`]);
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
