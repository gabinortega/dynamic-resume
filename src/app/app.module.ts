import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { InitComponent } from './init/init.component';
import { StepsModule } from 'primeng/steps';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonalComponent } from './personal/personal.component';
import { LocationComponent } from './location/location.component';
import { ProfileComponent } from './profile/profile.component';
import { EducationComponent } from './education/education.component';
import { EmploymentComponent } from './employment/employment.component';
import { SummaryComponent } from './summary/summary.component';

@NgModule({
  declarations: [AppComponent, InitComponent, PersonalComponent, LocationComponent, ProfileComponent, EducationComponent, EmploymentComponent, SummaryComponent],
  imports: [
    BrowserModule,
    StepsModule,
    ToastModule,
    MessagesModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
