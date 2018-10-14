import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'calc-oops404',
  template: `
    <h1 style="color:red;">
      oops! 404
    </h1>
  `,
  styles: [`
    :host {
      /* CANNOT SIMPLY INHERITED BECAUSE IT IS NOT HOSTED BY A PARENT */
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
    }
  `]
})
export class Oops404Component implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
    setTimeout(() => this.router.navigate(['/home'], {skipLocationChange: true}), 3000)
  }

}
