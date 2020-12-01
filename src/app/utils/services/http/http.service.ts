import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  public baseUrl: string = environment.baseurl;
  constructor(private http: HttpClient, public router: Router) { }

  /**
   * @method to perform the http `delete` method
   * @param api - name of the service/api to be called
   * @param data - data to be passed for deleting
   * @returns the Observable<any>
   */
  delete(api: any , data?: any): Observable<any> {
    const options = {
      // headers: this.getRequestHeaders(),
      // body: JSON.stringify(data)
    };
    return this.http
      .delete(this.baseUrl + api, options )
      .pipe(
        map(response => response),
        catchError(this.handleError)
      );
  }


  get(api: any): Observable<any> {
    return this.http
      .get(this.baseUrl + api, { headers:null })
      .pipe(
        map(response => response),
        catchError(this.handleError)
      );
  }

  post(api: any, data?: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http
      .post(this.baseUrl + api, JSON.stringify(data), httpOptions)
      .pipe(
        map(response => response),
        catchError(this.handleError)
      );
  }

  put(api: any, data: any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
      })
    };
    return this.http
      .put(this.baseUrl + api, JSON.stringify(data),httpOptions)
      .pipe(
        map(response => response),
        catchError(this.handleError)
      );
  }



  handleError(error: any): Observable<any> {
    return throwError(error);
  }
}
