import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagerComponent } from './componentes/manager/manager.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { GroupsComponent } from './componentes/groups/groups.component';
import { CardModule, } from 'primeng/card';
import { GiftsComponent } from './componentes/gifts/gifts.component';
import { ProductsComponent } from './componentes/products/products.component';
import {PasswordModule} from 'primeng/password';

import {FileUploadModule} from 'primeng/fileupload';
import { UploadImageComponent } from './componentes/upload-image/upload-image.component';
import { ImageComponent } from './componentes/image/image.component';
import { MailComponent } from './componentes/mail/mail.component';
import { AddpeopleComponent } from './componentes/addpeople/addpeople.component';

import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [
    AppComponent,
    ManagerComponent,
    GroupsComponent,
    GiftsComponent,
    ProductsComponent,
    UploadImageComponent,
    ImageComponent,
    MailComponent,
    AddpeopleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    CardModule,
    PasswordModule,
    FileUploadModule,
 DialogModule 

    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
