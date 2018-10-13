import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'calc-footer',
  template: `
    <span class="calc-minor">
        This app is called internally <span class="calc-highlight" tabindex="0">webapp</span> and the prefix is
      <span class="calc-highlight" tabindex="0">calc-</span>!
      </span>
  `,
  styles: []
})
export class FooterComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
