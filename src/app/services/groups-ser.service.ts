import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Groups } from '../classes/groups';


@Injectable({
  providedIn: 'root'
})
export class GroupsSerService {
  url:string="https://localhost:44341/api/Groups"
  g:Groups=new Groups()
  pwd!:string

  constructor(private http:HttpClient) { }
  addGroup(g1:Groups):Observable<Array<Groups>>
  {
    
    return this.http.post<Array<Groups>>(this.url+"/Addgroup",g1);
  }
  updateGroup(g:Groups):Observable<Groups>{
    return this.http.post<Groups>(this.url+"/update/",g);
  }
  getByPWD(pwd:string):Observable<Groups>
  {
    return this.http.get<Groups>(this.url+"/getByPwd/"+pwd)
  }
}
