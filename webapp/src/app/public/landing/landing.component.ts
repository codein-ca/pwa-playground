import { Component, OnInit } from '@angular/core';
import { FetchDummyUsersService } from "../../core/fetch-dummy-users.service";
import { OriginalRandomUser, RandomUser } from "../../types/random-user";

@Component( {
  selector: 'calc-landing',
  templateUrl: 'landing.component.html',
  styleUrls: ['landing.component.scss']
} )
export class LandingComponent implements OnInit {

  user: RandomUser;

  constructor( private userService: FetchDummyUsersService ) {
    this.user = {
      phone: '',
      dob: '',
      age: -1,
      email: '',
      gender: '',
      location: {
        street: '',
        city: '',
        state: '',
        postalCode: '',
        country: ''
      },
      login: '',
      password: '',
      name: '',
      photo: ''
    };
  }

  ngOnInit() {
    this.processCustomer();
  }

  processCustomer() {
    this.userService.getCustomer().subscribe(
      ( next: OriginalRandomUser ) => {
        // console.info( 'I AM THE PAYLOAD (NEXT):', next );
        this.user = {
          name: next['results'][0].name.title + ' ' + next['results'][0].name.first,
          age: next['results'][0].dob.age,
          dob: next['results'][0].dob.date,
          email: next['results'][0].email,
          gender: next['results'][0].gender,
          location: {
            street: next['results'][0].location.street,
            state: next['results'][0].location.state,
            postalCode: next['results'][0].location.postcode,
            city: next['results'][0].location.city,
            country: next['results'][0].nat,
          },
          login: next['results'][0].login.username,
          password: next['results'][0].login.password,
          phone: next['results'][0].phone,
          photo: next['results'][0].picture.large,
        };
      },
      error => console.error( error ),
      () => null );
  }
}
