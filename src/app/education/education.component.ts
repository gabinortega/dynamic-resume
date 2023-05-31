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
      institution: new FormControl<string | null>(null),
      field: new FormControl<string | null>(null),
      degrees: new FormControl<string | null>(null),
      institution_Location: new FormControl<string | null>(null),
      graduation_date: new FormControl<string | null>(null),
    });
    this.getDegreesList();
  }

  getDegreesList() {
    this.appService.getDegreesList().subscribe((response) => {
      this.degreesList = response;
    });
  }
}
