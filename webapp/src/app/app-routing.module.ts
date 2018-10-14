import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthenticationComponent} from "./public/authentication/authentication.component";
import {Oops404Component} from "./public/oops404/oops404.component";
import {LandingComponent} from "./public/landing/landing.component";
import {DashboardComponent} from "./secure/dashboard/dashboard.component";
import {LoadingComponent} from "./public/loading/loading.component";

const routes: Routes = [
  {
    path: 'loading',
    component: LoadingComponent
  },
  {
    path: 'home',
    component: LandingComponent
  },
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
    component: LoadingComponent
  },
  {
    path: '**',
    component: Oops404Component
  }
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
