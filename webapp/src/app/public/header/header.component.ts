import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'calc-header',
  template: `
    <header class="calc-flexc">
      <calc-nav class="calc-f1"></calc-nav>
    </header>
  `,
  styles: [`
    header {
      /*margin: -2rem -2rem 1rem;*/
      box-shadow: 0 0 10px #00000099;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      z-index: 100;
      background-color: white;
    }
  `]
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
