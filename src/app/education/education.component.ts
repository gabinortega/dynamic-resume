import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from '../app.service';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({});
  value: any;
  degreesList = [];
  selectedDegree = '';
  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      fullName: new FormControl<string | null>(null),
      phone: new FormControl<string | null>(null),
      email: new FormControl<string | null>(null),
    });
    this.getDegreesList();
  }

  getDegreesList() {
    this.appService.getDegreesList().subscribe((response: never[]) => {
      this.degreesList = response;
    });
  }
}
