import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitusersService {


  
  constructor(private http:HttpClient) { }
  getusers(){
  
    return this.http.get('https://api.github.com/search/users?q=repos:>12+followers:<1000&location:uk+language:python&page=1&per_page=1000',{ responseType: 'json' });
              
  }

  getrepodata(url:any){
    return this.http.get(url,{ responseType: 'json' });
  }
  
}
