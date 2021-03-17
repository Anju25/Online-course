import { HttpClient,HttpErrorResponse} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import{ catchError, tap, filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InfoService {
  constructor(private http:HttpClient) { } 
  
  url:string="https://nut-case.s3.amazonaws.com/coursessc.json";

  getdetails()
  {
    return this.http.get<any[]>(this.url);
  }
}
