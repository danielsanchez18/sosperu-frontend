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
import { CitizenNormasPageComponent } from './pages/normas/normas-page.component';
import { CitizenComunityFeedComponent } from './pages/comunity/feed/comunity-feed.component';
import { CitizenComunityAlertsComponent } from './pages/comunity/alerts/comunity-alerts.component';
import { CitizenComunityAlertsDetailComponent } from './pages/comunity/alerts-detail/comunity-alerts-detail.component';
import { CitizenComunityDenunciasComponent } from './pages/comunity/denuncias/comunity-denuncias.component';
import { CitizenComunityRecordatoriosComponent } from './pages/comunity/recordatorios/comunity-recordatorios.component';
import { CitizenComunityPostComponent } from './pages/comunity/post/comunity-post.component';
import { CitizenComunityRecordatoriosDetailComponent } from './pages/comunity/recordatorios-detail/comunity-recordatorios-detail.component';
import { CitizenProfileNotificationsTodasComponent } from './pages/profile/notifications-todas/profile-notifications-todas.component';
import { CitizenProfileNotificationsAlertasComponent } from './pages/profile/notifications-alertas/profile-notifications-alertas.component';
import { CitizenProfileNotificationsComunidadComponent } from './pages/profile/notifications-comunidad/profile-notifications-comunidad.component';

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
        data: { title: 'Notificaciones' },
        children: [
          {
            path: '', redirectTo: "todas", pathMatch: 'full'
          },
          {
            path: 'todas', component: CitizenProfileNotificationsTodasComponent
          },
          {
            path: 'comunidad', component: CitizenProfileNotificationsComunidadComponent
          },
          {
            path: 'alertas', component: CitizenProfileNotificationsAlertasComponent
          }
        ]
      },
      {
        path: 'comunidad/1', component: CitizenComunityPageComponent,
        data: { title: 'Los Pinos de Chiclayo' },
        children: [
          {
            path: '', redirectTo: "feed", pathMatch: 'full'
          },
          {
            path: 'feed', component: CitizenComunityFeedComponent,
            data: { title: 'Feed' },
          },
          {
            path: 'alertas', component: CitizenComunityAlertsComponent,
            data: { title: 'Alertas' },
          },
          {
            path: 'denuncias', component: CitizenComunityDenunciasComponent,
            data: { title: 'Denuncias' },
          },
          {
            path: 'recordatorios', component: CitizenComunityRecordatoriosComponent,
            data: { title: 'Recordatorios' },
          },
          {
            path: 'publicaciones', component: CitizenComunityPostComponent,
            data: { title: 'Publicaciones' },
          }
        ]
      },
      {
        path: 'comunidad/1/alertas/1', component: CitizenComunityAlertsDetailComponent,
        data: { title: 'Detalles de Alerta' }
      },
      {
        path: 'comunidad/1/recordatorios/1', component: CitizenComunityRecordatoriosDetailComponent,
        data: { title: 'Detalles de Recordatorio' }
      },
      {
        path: 'reglas', component: CitizenNormasPageComponent,
        data: { title: 'Normas de Uso' }
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
        path: "comunidad/1/denuncias/1", component: CitizenDenunciaDetailsComponent,
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
