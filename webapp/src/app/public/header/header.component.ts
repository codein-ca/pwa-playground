import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'calc-header',
  template: `
    <header class="calc-flex-c calc-f1">
      <calc-nav></calc-nav>
    </header>
  `,
  styles: [`
    :host {
      display: flex;

      box-shadow: 0 0 10px #00000099;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      z-index: 100;
      background-color: white;
    }
    header {
      /*margin: -2rem -2rem 1rem;*/
    }
  `]
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
