import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitizenMainPageComponent } from './pages/main/main-page.component';
import { CitizenAlertPageComponent } from './pages/alert/alert-page.component';
import { CitizenComunityPageComponent } from './pages/comunity/comunity-page.component';
import { CitizenDenunciaPageComponent } from './pages/denuncia/denuncia-page.component';
import { CitizenDenunciaMapComponent } from './pages/denuncia/map/denuncia-map.component';
import { CitizenDenunciaAddComponent } from './pages/denuncia/add/denuncia-add.component';

const routes: Routes = [
  {
    path: '', component: CitizenMainPageComponent,
    children: [
      {
        path: '', redirectTo: "alerta", pathMatch: 'full'
      },
      {
        path: 'alerta', component: CitizenAlertPageComponent,
        data: { title: 'Alerta Ciudadano' }
      },
      {
        path: 'comunidad/1', component: CitizenComunityPageComponent,
        data: { title: 'Mi Comunidad' }
      },
      {
        path: "denuncias", component: CitizenDenunciaPageComponent,
        data: { title: 'Denuncia' }
      },
      {
        path: "denuncias/mapa", component: CitizenDenunciaMapComponent,
        data: { title: 'Seleccione su ubicación' }
      },
      {
        path: "denuncias/registrar", component: CitizenDenunciaAddComponent,
        data: { title: 'Enviar Anexos' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitizenRoutingModule { }
