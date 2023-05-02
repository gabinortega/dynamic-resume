import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.scss'],
})
export class EmploymentComponent {
  value_1: any;
  value_2: any;
  formGroup: FormGroup = new FormGroup({});
  ngOnInit(): void {
    this.formGroup = new FormGroup({
      job_title: new FormControl<string | null>(null),
      employer: new FormControl<string | null>(null),
      start_date: new FormControl<string | null>(null),
      end_date: new FormControl<string | null>(null),
      promotions: new FormControl<string | null>(null),
      responsabilities: new FormControl<string | null>(null),
      accomplishment: new FormControl<string | null>(null),
      description: new FormControl<string | null>(null),
    });
  }
}
