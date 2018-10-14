import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'calc-loading',
  template: `
    <div class="load-bar">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <section class="calc-f1">
      <h1>Please wait...</h1>
      <figure>
        <img src="../../../assets/jpeg/homer.jpg" alt="First Homer should be loaded">
      </figure>
    </section>
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
    }

    .load-bar {
      position: relative;
      width: 100%;
      height: 6px;
      background-color: #fdba2c;
    }

    .bar {
      content: "";
      display: inline;
      position: absolute;
      width: 0;
      height: 100%;
      left: 50%;
      text-align: center;
    }

    .bar:nth-child(1) {
      background-color: #da4733;
      animation: loading 3s linear infinite;
    }

    .bar:nth-child(2) {
      background-color: #3b78e7;
      animation: loading 3s linear 1s infinite;
    }

    .bar:nth-child(3) {
      background-color: #fdba2c;
      animation: loading 3s linear 2s infinite;
    }

    @keyframes loading {
      from {
        left: 50%;
        width: 0;
        z-index: 100;
      }
      33.3333% {
        left: 0;
        width: 100%;
        z-index: 10;
      }
      to {
        left: 0;
        width: 100%;
      }
    }
  `]
})
export class LoadingComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
    // const target = document.getElementsByTagName('head')[0];
    // target.scrollIntoView(true);
    // console.info('LOAD BAR', target);
    // setTimeout(() => this.router.navigate(['/home'], {skipLocationChange: true}), 1500);
    setTimeout(() => this.router.navigate(['/home']), 1500);
  }

}
