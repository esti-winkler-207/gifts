import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Parents } from '../classes/parents';

@Injectable({
  providedIn: 'root'
})
export class ParentsService {
p:Parents=new Parents()
  url:string="https://localhost:44341/api/parents/"
  constructor(private http:HttpClient) { }
  addParent(p1:Parents):Observable<Array<Parents>>{
    return this.http.post<Array<Parents>>(this.url+"addParent",p1)

  }
}
