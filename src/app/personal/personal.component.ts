import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
})
export class PersonalComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({});
  constructor() {}
  ngOnInit(): void {
    this.formGroup = new FormGroup({
      fullName: new FormControl<string | null>(null),
      phone: new FormControl<string | null>(null),
      email: new FormControl<string | null>(null),
    });
  }
}
