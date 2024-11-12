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
import { CitizenDenunciaPhotoComponent } from './pages/denuncia/photo/denuncia-photo.component';
import { CitizenDenunciaAudioComponent } from './pages/denuncia/audio/denuncia-audio.component';
import { CitizenDenunciaDetailsComponent } from './pages/denuncia/details/denuncia-details.component';
import { CitizenComunityInfoComponent } from './pages/comunity/info/comunity-info.component';
import { CitizenComunityChatComponent } from './pages/comunity/chat/comunity-chat.component';
import { CitizenComunityPostAddComponent } from './pages/comunity/post-add/comunity-post-add.component';
import { CitizenComunityContactComponent } from './pages/comunity/contact/comunity-contact.component';
import { CitizenComunityPostDetailComponent } from './pages/comunity/post-detail/comunity-post-detail.component';
import { CitizenComunitySearchComponent } from './pages/comunity/search/comunity-search.component';
import { CitizenProfilePageComponent } from './pages/profile/profile-page.component';
import { CitizenProfileEditComponent } from './pages/profile/edit/profile-edit.component';
import { CitizenComunityAddComponent } from './pages/comunity/add/comunity-add.component';
import { CitizenProfileNotificationsComponent } from './pages/profile/notifications/profile-notifications.component';
import { CitizenNormasPageComponent } from './pages/normas/normas-page.component';
import { CitizenComunityFeedComponent } from './pages/comunity/feed/comunity-feed.component';
import { CitizenComunityAlertsComponent } from './pages/comunity/alerts/comunity-alerts.component';
import { CitizenComunityAlertsDetailComponent } from './pages/comunity/alerts-detail/comunity-alerts-detail.component';
import { CitizenComunityDenunciasComponent } from './pages/comunity/denuncias/comunity-denuncias.component';
import { CitizenComunityRecordatoriosComponent } from './pages/comunity/recordatorios/comunity-recordatorios.component';
import { CitizenComunityPostComponent } from './pages/comunity/post/comunity-post.component';
import { CitizenComunityRecordatoriosDetailComponent } from './pages/comunity/recordatorios-detail/comunity-recordatorios-detail.component';
import { CitizenProfileNotificationsTodasComponent } from './pages/profile/notifications-todas/profile-notifications-todas.component';
import { CitizenProfileNotificationsComunidadComponent } from './pages/profile/notifications-comunidad/profile-notifications-comunidad.component';
import { CitizenProfileNotificationsAlertasComponent } from './pages/profile/notifications-alertas/profile-notifications-alertas.component';
import { CitizenComisariaPageComponent } from './pages/comisaria/comisaria-page.component';
import { CitizenComisariaDetailComponent } from './pages/comisaria/comisaria-detail/comisaria-detail.component';

@NgModule({
  declarations: [
    CitizenMainPageComponent,

    CitizenAlertPageComponent,

    CitizenComunityPageComponent,

    CitizenDenunciaPageComponent,
    CitizenDenunciaMapComponent,
    CitizenDenunciaAddComponent,
    CitizenDenunciaPhotoComponent,
    CitizenDenunciaAudioComponent,
    CitizenDenunciaDetailsComponent,

    CitizenComunityFeedComponent,
    CitizenComunityInfoComponent,
    CitizenComunityChatComponent,
    CitizenComunityPostAddComponent,
    CitizenComunityPostDetailComponent,
    CitizenComunityContactComponent,
    CitizenComunitySearchComponent,
    CitizenComunityAddComponent,

    CitizenProfilePageComponent,
    CitizenProfileEditComponent,
    CitizenProfileNotificationsComponent,
    CitizenNormasPageComponent,

    CitizenComunityAlertsComponent,
    CitizenComunityAlertsDetailComponent,
    CitizenComunityDenunciasComponent,
    CitizenComunityRecordatoriosComponent,
    CitizenComunityPostComponent,
    CitizenComunityRecordatoriosDetailComponent,

    CitizenProfileNotificationsTodasComponent,
    CitizenProfileNotificationsComunidadComponent,
    CitizenProfileNotificationsAlertasComponent,
    CitizenComisariaPageComponent,
    CitizenComisariaDetailComponent,

  ],
  imports: [
    CommonModule,
    CitizenRoutingModule,
    SharedModule,
  ]
})
export class CitizenModule { }
