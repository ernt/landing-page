import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coctel } from '../model/Coctel';


@Injectable({
  providedIn: 'root'
})
export class CoctelService {
  private coctel:Coctel={ id:0,
    title:'',
    price:0,
    category:'',
    description:'',
    image:'' }
  private  API_URI = 'https://fakestoreapi.com/';
  constructor(private http: HttpClient) { }

      getAllProducts():Observable<Coctel>{
      return this.http.get<Coctel>(this.API_URI+"products")

    }


}

