import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitizenMainPageComponent } from './main/main-page.component';
import { CitizenAlertComponent } from './alert/alert.component';

const routes: Routes = [
  {
    path: '', component: CitizenMainPageComponent,
    children: [
      {
        path: '', redirectTo: "alerta", pathMatch: 'full'
      },
      {
        path: 'alerta', component: CitizenAlertComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitizenRoutingModule { }
