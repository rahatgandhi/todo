import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private httpService: HttpService,) { }
  getData(url: string): any {
    return this.httpService.get(url)
      .pipe(
        map((res: Response) => {
          return res;
        }),
        catchError(error => {
          return this.errorHandler(error);
        })
      );
  }

  postData(url: string, data?: any): any {
    return this.httpService.post(url, data)
      .pipe(
        map((res: Response) => {
          return res;
        }),
        catchError(error => {
          return this.errorHandler(error);
        })
      );
  }


  deleteData(url: string , data?: any){
    return this.httpService.delete(url , data)
      .pipe(
        map((res: Response) => {
          return res;
        }),
        catchError(error => {
          return this.errorHandler(error);
        })
      );
  }
  putData(url: string, data: any): any {
    return this.httpService.put(url, data)
      .pipe(
        map((res: Response) => {
          return res;
        }),
        catchError(error => {
          return this.errorHandler(error);
        })
      );
  }



  errorHandler(error: any) {
  
    return throwError(error.error);
  }
}
