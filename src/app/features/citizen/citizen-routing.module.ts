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
import { CitizenComunityChatComponent } from './pages/comunity/chat/comunity-chat.component';
import { CitizenComunityInfoComponent } from './pages/comunity/info/comunity-info.component';
import { CitizenComunityPostDetailComponent } from './pages/comunity/post-detail/comunity-post-detail.component';
import { CitizenComunityPostAddComponent } from './pages/comunity/post-add/comunity-post-add.component';
import { CitizenComunityContactComponent } from './pages/comunity/contact/comunity-contact.component';
import { CitizenComunitySearchComponent } from './pages/comunity/search/comunity-search.component';
import { CitizenProfilePageComponent } from './pages/profile/profile-page.component';
import { CitizenComunityAddComponent } from './pages/comunity/add/comunity-add.component';
import { CitizenProfileNotificationsComponent } from './pages/profile/notifications/profile-notifications.component';
import { CitizenProfileEditComponent } from './pages/profile/edit/profile-edit.component';

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
        path: 'notificaciones', component: CitizenProfileNotificationsComponent,
        data: { title: 'Notificaciones' }
      },
      {
        path: 'comunidad/1', component: CitizenComunityPageComponent,
        data: { title: 'Los Pinos de Chiclayo' }
      },
      {
        path: 'comunidad/1/chat', component: CitizenComunityChatComponent,
        data: { title: 'Chat' }
      },
      {
        path: 'comunidad/buscar', component: CitizenComunitySearchComponent,
        data: { title: 'Buscar Comunidad' }
      },
      {
        path: 'comunidad/crear', component: CitizenComunityAddComponent,
        data: { title: 'Forma una Comunidad' }
      },
      {
        path: 'comunidad/1/contactos', component: CitizenComunityContactComponent,
        data: { title: 'Contactos' }
      },
      {
        path: 'comunidad/1/informacion', component: CitizenComunityInfoComponent,
        data: { title: 'Información' }
      },
      {
        path: 'comunidad/1/post/1', component: CitizenComunityPostDetailComponent,
        data: { title: 'Publicación' }
      },
      {
        path: 'comunidad/1/post/generar', component: CitizenComunityPostAddComponent,
        data: { title: 'Publicar' }
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
      },
      {
        path: 'perfil/1', component: CitizenProfilePageComponent,
        data: { title: 'Perfil' }
      },
      {
        path: 'perfil/1/editar', component: CitizenProfileEditComponent,
        data: { title: 'Editar Perfil' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitizenRoutingModule { }
