import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Parents } from '../classes/parents';

@Injectable({
  providedIn: 'root'
})
export class ParentsService {
p:Parents=new Parents()
  url:string=""
  constructor(private http:HttpClient) { }
}
