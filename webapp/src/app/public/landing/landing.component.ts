import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'calc-landing',
  template: `
    <section class="calc-landing">
      <h1 tabindex="-1">
        Welcome. I am the only landing page!
      </h1>
    </section>

  `,
  styles: ['/*.calc-landing {min-height: 200vh}*/']
})
export class LandingComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
