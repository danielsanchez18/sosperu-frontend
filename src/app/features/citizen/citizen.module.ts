import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitizenRoutingModule } from './citizen-routing.module';
import { CitizenMainPageComponent } from './pages/main/main-page.component';
import { SharedModule } from '../../shared/shared.module';
import { CitizenAlertPageComponent } from './pages/alert/alert-page.component';
import { CitizenComunityPageComponent } from './pages/comunity/comunity-page.component';
import { CitizenDenunciaPageComponent } from './pages/denuncia/denuncia-page.component';
import { CitizenDenunciaMapComponent } from './pages/denuncia/map/denuncia-map.component';
import { CitizenDenunciaAddComponent } from './pages/denuncia/add/denuncia-add.component';


@NgModule({
  declarations: [
    CitizenMainPageComponent,

    CitizenAlertPageComponent,

    CitizenComunityPageComponent,

    CitizenDenunciaPageComponent,
    CitizenDenunciaMapComponent,
    CitizenDenunciaAddComponent
  ],
  imports: [
    CommonModule,
    CitizenRoutingModule,
    SharedModule
  ]
})
export class CitizenModule { }
