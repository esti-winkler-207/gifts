import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Manager } from 'src/app/classes/manager';
import { ManagerSerService } from 'src/app/services/manager-ser.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.css']
})
export class ManagerComponent implements OnInit {

  constructor(private managerser:ManagerSerService,private route:Router) { }
m2:Manager=new Manager()


  ngOnInit(): void {
  }
  addmanager(){

    
    this.managerser.m1=this.m2;
    this.managerser.addmanager(this.managerser.m1).subscribe(data=>{
      this.managerser.id_m=data.id_manager,
    console.log(data,this.managerser.id_m)
    
    this.route.navigate(["/groups"])
    }
    )
  }

}
