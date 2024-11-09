import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitizenMainPageComponent } from './pages/main/main-page.component';
import { CitizenAlertPageComponent } from './pages/alert/alert-page.component';
import { CitizenComunityPageComponent } from './pages/comunity/comunity-page.component';
import { CitizenDenunciaPageComponent } from './pages/denuncia/denuncia-page.component';
import { CitizenDenunciaMapComponent } from './pages/denuncia/map/denuncia-map.component';
import { CitizenDenunciaAddComponent } from './pages/denuncia/add/denuncia-add.component';
import { CitizenDenunciaPhotoComponent } from './pages/denuncia/photo/denuncia-photo.component';
import { CitizenDenunciaAudioComponent } from './pages/denuncia/audio/denuncia-audio.component';
import { CitizenDenunciaDetailsComponent } from './pages/denuncia/details/denuncia-details.component';

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
        data: { title: 'Seleccione su Ubicación' }
      },
      {
        path: "denuncias/foto", component: CitizenDenunciaPhotoComponent,
        data: { title: 'Capture su Denuncia' }
      },
      {
        path: "denuncias/audio", component: CitizenDenunciaAudioComponent,
        data: { title: 'Grabar Audio' }
      },
      {
        path: "denuncias/registrar", component: CitizenDenunciaAddComponent,
        data: { title: 'Enviar Anexos' }
      },
      {
        path: "denuncias/1", component: CitizenDenunciaDetailsComponent,
        data: { title: 'Detalles de Denuncia' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitizenRoutingModule { }
