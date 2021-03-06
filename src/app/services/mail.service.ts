import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Mail } from '../classes/mail';

@Injectable({
  providedIn: 'root'
})
export class MailService {
url:string="https://localhost:44341/api/mail/sendemail"
  constructor(private http:HttpClient) { }
  sendemail(m:Mail):Observable<Mail>
  {
    return this.http.post<Mail>(this.url,m);
  }

}
