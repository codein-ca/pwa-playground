import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthenticationComponent} from "./public/authentication/authentication.component";
import {Oops404Component} from "./public/oops404/oops404.component";
import {LandingComponent} from "./public/landing/landing.component";
import {DashboardComponent} from "./secure/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: 'login',
    component: AuthenticationComponent
  },
  {
    path: 'secure',
    component: DashboardComponent
  },
  {
    path: 'secure/dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    component: LandingComponent
  },
  {
    path: '**',
    component: Oops404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
