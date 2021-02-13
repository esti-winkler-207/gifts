import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { ImageSnippet } from '../componentes/image/image.component';

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {
  constructor(private http: HttpClient) {}


  public uploadImage(image: ImageSnippet): Observable<ImageSnippet> {
    console.log(image)
    // const formData = new FormData();

    // formData.append('image', image);
// console.log(formData)
    return this.http.post<ImageSnippet>("https://localhost:44341/api/image/add", image);
  }

  
}
