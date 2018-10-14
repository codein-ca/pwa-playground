import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'calc-footer',
  template: `
    <footer class="calc-minor">
      This app is called internally <span class="calc-highlight" tabindex="0">webapp</span> and the prefix is
      <span class="calc-highlight" tabindex="0">calc-</span>!
    </footer>
  `,
  styles: [`
    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100%;
      border-top: 1px solid gray;
      margin-top: 1rem;
    }
  `]
})
export class FooterComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
