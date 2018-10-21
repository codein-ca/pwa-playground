import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'calc-header',
  template: `
    <!--<header class="calc-flex-c calc-f1">-->
      <calc-nav></calc-nav>
    <!--</header>-->
  `,
  styles: [`
    :host {
      /*p*/
      position: fixed;
      top: 0;
      left: 0;
      /*b*/
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100vw;
      min-height: 100px;
      /*t*/
      /*v*/
      box-shadow: 0 0 10px #00000099;
      z-index: 100;
      background-color: white;
    }
  `]
} )
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
