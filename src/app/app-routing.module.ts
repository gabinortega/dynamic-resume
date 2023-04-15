import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitComponent } from './init/init.component';
import { PersonalComponent } from './personal/personal.component';
import { SummaryComponent } from './summary/summary.component';
import { EmploymentComponent } from './employment/employment.component';
import { EducationComponent } from './education/education.component';
import { ProfileComponent } from './profile/profile.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  {
    path: '',
    component: InitComponent,
  },
  {
    path: 'init',
    component: InitComponent,
    children: [
      {
        path: 'personal',
        component: PersonalComponent,
      },
      {
        path: 'location',
        component: LocationComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
      {
        path: 'education',
        component: EducationComponent,
      },
      {
        path: 'employment',
        component: EmploymentComponent,
      },
      {
        path: 'summary',
        component: SummaryComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
