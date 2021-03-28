import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesComponent } from './roles/roles.component';
import { AdminRoutingModule } from './admin-routing.module';
import { UsersComponent } from './users/users.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [RolesComponent, UsersComponent],
  imports: [
    CommonModule,    
    AdminRoutingModule,
    ComponentsModule
  ]
})
export class AdminModule { }
