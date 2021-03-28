import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { FormsModule } from '@angular/forms';
import { ActionButtonsComponent } from './action-buttons/action-buttons.component';
import { CustomMenuComponent } from './custom-menu/custom-menu.component';
import { RouterModule } from '@angular/router';
import { RoleDirective } from '../directives/role.directive';
import { ThemeDirective } from '../directives/theme.directive';

@NgModule({
  declarations: [CustomTableComponent,
    ActionButtonsComponent,
    CustomMenuComponent,
    RoleDirective,
    ThemeDirective],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ], exports: [
    CustomTableComponent,
    CustomMenuComponent,
    ThemeDirective
  ]
})
export class ComponentsModule { }