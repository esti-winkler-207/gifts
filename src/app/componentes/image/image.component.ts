import { Component, OnInit } from '@angular/core';
import { ImageServiceService } from 'src/app/services/image-service.service';
export class ImageSnippet {
  constructor(public src: string, public file: File) {}
}

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  selectedFile!: ImageSnippet;

  constructor(private imageService: ImageServiceService){}
  ngOnInit(): void {
    
  }

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {

      this.selectedFile = new ImageSnippet(event.target.result, file);

      this.imageService.uploadImage(this.selectedFile).subscribe(
        (res:any) => {
        
        },
        (err:any) => {
        
        })
    });

    reader.readAsDataURL(file);
  }

}
