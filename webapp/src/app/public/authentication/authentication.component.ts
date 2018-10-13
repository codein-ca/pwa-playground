import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'calc-authentication',
  template: `
    <section class="calc-authentication calc-flexc">
      <label class="calc-flex">
        <span class="calc-f1">Dummy user:</span>
        <input type="text" placeholder="Allow going to /secure">
      </label>
      <label class="calc-flex">
        <span class="calc-f1">Dummy password:</span>
        <input type="password" placeholder="***********">
      </label>
      <input type="button" value="Login" (click)="authenticate()">
    </section>
  `,
  styles: [`
  .calc-authentication {
    background-color: lightgray;
    border: 1px solid dimgray;
    padding: 1rem;
  }
  `]
})
export class AuthenticationComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  authenticate(){
    if(true) {
      this.router.navigate(['/secure'])
    }
  }

}
