import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  url='https://newsapi.org/v2/top-headlines?sources';
  apiKey='058a2812804d4e2581f087732eb3a113';
  constructor(private http:HttpClient) { }

  getDetails(id):Observable<any>{
     return this.http.get(`${this.url}=${id}&apiKey=${this.apiKey}`);

}

}
