import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication/authentication.component';
import { Oops404Component } from './oops404/oops404.component';
import { LandingComponent } from './landing/landing.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AuthenticationComponent,
    Oops404Component,
    LandingComponent,
    LoadingComponent,
  ]
})
export class PublicModule { }
