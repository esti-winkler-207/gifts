import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from '../classes/products';

@Injectable({
  providedIn: 'root'
})
export class ProductSerService {
  url:string="https://localhost:44341/api/Products/"

  constructor(private http:HttpClient) { }
  getAllproduct():Observable<Array<Products>>
  {
   return this.http.get<Array<Products>>(this.url+"getAll");

  }
}
