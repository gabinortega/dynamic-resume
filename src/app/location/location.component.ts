import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({});
  constructor() {}
  ngOnInit(): void {
    this.formGroup = new FormGroup({
      country: new FormControl<string | null>(null),
      city: new FormControl<string | null>(null),
      space: new FormControl<string | null>(null),
    });
  }
}
