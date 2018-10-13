import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'calc-dashboard',
  template: `
    <h1>
      dashboard is protected!
    </h1>
    <hr>
    <h3>Redirecting you to login in <span style="color: red">{{seconds}}</span> seconds.</h3>
    <hr>
    <h3>Create some guard to deny access if not authenticated.</h3>
  `,
  styles: ['h1 {text-transform: uppercase}']
})
export class DashboardComponent implements OnInit {

  seconds: number;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.seconds = 4;
    setTimeout(() => this.router.navigate(['/login']), 4000)
  }

}
