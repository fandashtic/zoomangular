import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders, HttpInterceptor } from '@angular/common/http';
import { retry, catchError, tap } from 'rxjs/operators';
import {  throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ZoomService {
  private REST_API_SERVER = "http://localhost:3000/";
  private authorization = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOm51bGwsImlzcyI6IndaVDB0bHVLUTJlVjdzWlhFa2IwR1EiLCJleHAiOjE1OTEyNTk5NjIsImlhdCI6MTU5MDY1NTE2M30.XLBasM1JUFTwJHHP3fL0Fa00os-VqMTE6CMoYOGb9sI";

  constructor(private httpClient: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public sendGetRequest() {
    return this.httpClient.get("https://api.zoom.us/v2/users?page_number=1&page_size=30&status=active");
  }

}
