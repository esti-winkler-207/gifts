import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Groups } from 'src/app/classes/groups';
import { GroupsSerService } from 'src/app/services/groups-ser.service';
import { ManagerSerService } from 'src/app/services/manager-ser.service';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.css']
})
export class GroupsComponent implements OnInit {

  constructor(private groupSer:GroupsSerService,private mangarSer:ManagerSerService,private route:Router) { }
g:Groups=new Groups()
  ngOnInit(): void {
  }
  addGroup(){
    this.groupSer.g=this.g
    
    this.groupSer.g.collect_end=false
    this.groupSer.addGroup(this.groupSer.g).subscribe(
      data=>{
        console.log(data)
      }
      ,err=>{
        console.log("שגיאה בגישה לשרת")

      }
    )
  }
  updateGroup(){
    this.groupSer.g=this.g;
    this.groupSer.g.collect_end=false;
    this.groupSer.g.id_manager_group=this.mangarSer.id_m;
    this.groupSer.pwd=this.g.password_group;
   
    this.groupSer.updateGroup(this.groupSer.g).subscribe(
        data=>{console.log(data,this.g.id_group),
        this.route.navigate(["/addpeople"])
      },
      err=>{console.log("error!!!")}
    )
  }


}
