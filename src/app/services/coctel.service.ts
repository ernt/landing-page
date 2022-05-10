import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CoctelService {
  API_URI = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  constructor(private http: HttpClient) { }

  getservice(name:string){
      this.http.get(this.API_URI+name).subscribe(data => {
        console.log(data);
      });
    }

  getservices(id: number){
    return this.http.get(this.API_URI + '/' + id);
  }
}

