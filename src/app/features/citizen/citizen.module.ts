import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitizenRoutingModule } from './citizen-routing.module';
import { CitizenMainPageComponent } from './main/main-page.component';
import { SharedModule } from '../../shared/shared.module';
import { CitizenAlertComponent } from './alert/alert.component';


@NgModule({
  declarations: [
    CitizenMainPageComponent,
    CitizenAlertComponent
  ],
  imports: [
    CommonModule,
    CitizenRoutingModule,
    SharedModule
  ]
})
export class CitizenModule { }
