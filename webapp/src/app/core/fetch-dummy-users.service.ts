import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { environment } from "../../environments/environment";
import { OriginalRandomUser } from "../types/random-user";
import { catchError } from "rxjs/operators";

@Injectable( {
  providedIn: 'root'
} )
export class FetchDummyUsersService {

  constructor( private http: HttpClient ) {
  }

  getCustomer(): Observable<OriginalRandomUser> {
    return this.http.get<OriginalRandomUser>( environment.randomApiKey )
    .pipe(
      catchError( this.handleError )
    );
  }

  private handleError( error: any ) {
    console.error( '[SERVICE] server error:', error );
    if ( error.error instanceof Error ) {
      const errMessage = error.error.message;
      return throwError( errMessage );
    }
    return throwError( error || '[SERVICE] Node.js server error' );
  }
}
