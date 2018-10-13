import {Component} from '@angular/core';

@Component({
  selector: 'calc-root',
  template: `
    <main class="main-block calc-flexc">
      <calc-header></calc-header>
      <router-outlet></router-outlet>
      <calc-footer></calc-footer>
    </main>
  `,
  styleUrls: ['app.component.scss']
})
export class AppComponent {
}
