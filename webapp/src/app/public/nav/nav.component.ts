import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'calc-nav',
  template: `
    <nav class="calc-flex-r">
      <section class="calc-link-container calc-f1">
        <a routerLink="/">
          Restart
        </a>
        <a routerLink="/secure/dashboard">
          Dashboard
        </a>
        <a routerLink="/home">
          Home
        </a>
      </section>

      <input type="button" routerLink="/login" class="login" value="Login">
    </nav>
  `,
  styleUrls: ['nav.component.scss']
} )
export class NavComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
