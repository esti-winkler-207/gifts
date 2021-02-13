import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  providers: [MessageService],
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  
  constructor(private messageService: MessageService) {}


  ngOnInit(): void {
  }
  uploadedFiles: any[] = [];


  onUpload(event:any) {
      for(let file of event.files) {
          this.uploadedFiles.push(file);
          console.log(file)
      }
      


      this.messageService.add({severity: 'info', summary: 'File Uploaded', detail: ''});
  }
  

}
