import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent {
  formGroup: FormGroup = new FormGroup({});
  ngOnInit(): void {
    this.formGroup = new FormGroup({
      sumary: new FormControl<string | null>(null),
    });
  }
}
