import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Parents } from 'src/app/classes/parents';
import { GroupsSerService } from 'src/app/services/groups-ser.service';
import { ParentsService } from 'src/app/services/parents.service';

@Component({
  selector: 'app-table-parents',
  templateUrl: './table-parents.component.html',
  styleUrls: ['./table-parents.component.css'],
  providers: [MessageService],
  styles: [`
      :host ::ng-deep .p-cell-editing {
          padding-top: 0 !important;
          padding-bottom: 0 !important;
      }
  `]
})
export class TableParentsComponent implements OnInit {

  clonedProducts: { [s: string]: Parents; } = {};
  listP!:Array<Parents>

  constructor(
    private messageService: MessageService,
    private parentsServ:ParentsService,
    private groupServ:GroupsSerService

    ) { }

  ngOnInit(): void {
    debugger;
    this.groupServ.getByPWD(this.groupServ.pwd).subscribe(data=>{
      console.log(data);
      this.parentsServ.getByIdGroup(data.id_group).subscribe(
      data=>{
        console.log(data);
        this.listP=data;
      }
      ,err=>{
      console.error();
      }
    )
    },
    err=>{
      console.error();
    }
    )
  

  }
  onRowEditInit(p: Parents) {
    // this.clonedProducts[p.id_parent] = {...p};
}

onRowEditSave(p: Parents) {
    // if (product.price > 0) {
        delete this.clonedProducts[p.id_parent];
    //     this.messageService.add({severity:'success', summary: 'Success', detail:'Product is updated'});
    // }  
    // else {
    //     this.messageService.add({severity:'error', summary: 'Error', detail:'Invalid Price'});
    // }
}

onRowEditCancel(p: Parents, ) {
  // index: number
    // this.products2[index] = this.clonedProducts[product.id];
    delete this.clonedProducts[p.id_parent];
}

}
