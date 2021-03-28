import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateViaAuthGuard } from './guards/canactivateviaauthguard';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./auth/auth.module').then(module => module.AuthModule) },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(module => module.AdminModule),
    canActivate: [CanActivateViaAuthGuard]
  },
  {
    path: 'aircraft',
    loadChildren: () => import('./aircraft/aircraft.module').then(module => module.AircraftModule),
    canActivate: [CanActivateViaAuthGuard]
  },
  { path: '',   redirectTo: '/aircraft/rent', pathMatch: 'full' }, // redirect to 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
