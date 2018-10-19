import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FetchDummyUsersService {

  results;

  constructor(private http: HttpClient) {
    console.log('Constructor with results = ', this.results);
  }

  getUsers(){
    // https://randomapi.com/api/?key=ABCD-1234-EFGH-5678&ref=1234abcd
    this.http.get(environment.randomApiKey).subscribe(
      x => {
        this.results = x;
        console.info(this.results);
      },
          x => console.error(x),
          () => console.info('Complete.'));
      }

  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errMessage = error.error.message;
      return throwError(errMessage);
    }
    return throwError(error || 'Node.js server error');
  }
}
