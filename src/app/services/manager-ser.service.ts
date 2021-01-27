import { Injectable } from '@angular/core';

import { Manager } from '../classes/manager';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ManagerSerService {
url:string="https://localhost:44341/api/manager"
m1:Manager=new Manager()
id_m!:any
  constructor(private http:HttpClient) { }
addmanager(m:Manager):Observable<Manager>
{
   return this.http.post<Manager>(this.url+"/Add",m)
}
}
