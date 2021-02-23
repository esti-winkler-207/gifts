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
import { TableParentsComponent } from './componentes/table-parents/table-parents.component';


///
import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';


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
    AddpeopleComponent,
    TableParentsComponent
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
    DialogModule,
    TableModule,
    CalendarModule,
		SliderModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ToastModule,
    ProgressBarModule,
    
    


    


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
