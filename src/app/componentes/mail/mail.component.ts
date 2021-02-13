import { Component, OnInit } from '@angular/core';
import { Mail } from 'src/app/classes/mail';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.css']
})
export class MailComponent implements OnInit {

  constructor(private mailServ:MailService) { }
  m:Mail=new Mail()

  ngOnInit(): void {
  }
  sendemail()
  {
    this.m.contactadress="estiwinkler207@gmail.com"
    this.m.subject="Hello Esti!"
    this.m.body="it's work, let's continue"
    this.mailServ.sendemail(this.m).subscribe(data=>{console.log(data)},err=>{console.log("error!!!")})

  }

}
