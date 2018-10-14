import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'calc-landing',
  templateUrl: 'landing.component.html',
  styleUrls: ['landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    const img = document.getElementsByClassName('initial-homer-container')[0];
    img.scrollIntoView(true);
  }

}
