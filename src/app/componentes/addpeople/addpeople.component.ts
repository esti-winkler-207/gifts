import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { Parents } from 'src/app/classes/parents';
import { GroupsSerService } from 'src/app/services/groups-ser.service';
import { ParentsService } from 'src/app/services/parents.service';

@Component({
  selector: 'app-addpeople',
  templateUrl: './addpeople.component.html',
  styleUrls: ['./addpeople.component.css'],
  styles: [`
  :host ::ng-deep .p-button {
      margin: 0 .5rem 0 0;
      min-width: 10rem;
  }

  p {
      margin: 0;
  }

  .confirmation-content {
      display: flex;
      align-items: center;
      justify-content: center;
  }

  :host ::ng-deep .p-dialog .p-button {
      min-width: 6rem;
  }
`]  
})
export class AddpeopleComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig,private groupserv:GroupsSerService,private parentserv:ParentsService) {}

  displayModal: boolean=false;

  displayBasic: boolean=false;

  p:Parents=new Parents();
  
  

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
  showModalDialog() {
    this.displayModal = true;
}

showBasicDialog() {
this.groupserv.getByPWD(this.groupserv.pwd).subscribe(
  
  

   data=>{console.log(data),
    this.displayBasic = true;
    this.p.id_group=data.id_group;

  }
  ,err=>{console.log("error")}
)
    this.displayBasic = true;
}
addparent(){
  this.parentserv.p=this.p;
  this.parentserv.addParent(this.parentserv.p).subscribe(
    data=>{
      console.log(data);
      this.displayBasic=false;
    },
    err=>{
      console.log("error!!!!")
    }

  )
}
}
