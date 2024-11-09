import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'ingresar', pathMatch: 'full'
  },
  {
    path: 'ingresar', component: LoginComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./features/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'ciudadano',
    loadChildren: () => import('./features/citizen/citizen.module').then(m => m.CitizenModule)
  },
  {
    path: 'jefe',
    loadChildren: () => import('./features/manager/manager.module').then(m => m.ManagerModule)
  },
  {
    path: 'seguridad',
    loadChildren: () => import('./features/security/security.module').then(m => m.SecurityModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
