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
    this.m.contactadress="5710490@gmail.com"
    this.m.subject="שלום אסתי"
    this.m.body="זה אסתי וינקלר, הצלחתי לעשות שליחת מייל!!! !!!"
    this.mailServ.sendemail(this.m).subscribe(data=>{console.log(data)},err=>{console.log("error!!!")})

  }

}
