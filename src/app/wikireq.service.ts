import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WikireqService {

  constructor(private http:HttpClient) { }
  search(term:string){
   return this.http.get('http://en.wikipedia.org/w/api.php', {
     params: {
       action: 'query',
       list: 'search',
       format: 'json',
       srsearch: term,
       origin: '*'
     },
   });
  }
}
