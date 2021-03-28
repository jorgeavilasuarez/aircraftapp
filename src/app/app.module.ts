import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { CanActivateViaAuthGuard } from './guards/canactivateviaauthguard';
import { httpInterceptorProviders } from './interceptors';

@NgModule({
  declarations: [
    AppComponent   
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule
  ],
  providers: [httpInterceptorProviders, CanActivateViaAuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule { }
