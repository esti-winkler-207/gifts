import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddpeopleComponent } from './componentes/addpeople/addpeople.component';
import { GiftsComponent } from './componentes/gifts/gifts.component';
import { GroupsComponent } from './componentes/groups/groups.component';
import { ImageComponent } from './componentes/image/image.component';
import { LoginManagerComponent } from './componentes/login-manager/login-manager.component';
import { LoginParentComponent } from './componentes/login-parent/login-parent.component';
import { ManagerComponent } from './componentes/manager/manager.component';
import { ProductsComponent } from './componentes/products/products.component';
import { TableParentsComponent } from './componentes/table-parents/table-parents.component';
import { UploadImageComponent } from './componentes/upload-image/upload-image.component';

const routes: Routes = [
  {path:"tableParents", component:TableParentsComponent},
  {path:"LoginManager",component:LoginManagerComponent},
  {path:"LoginParent",component:LoginParentComponent},
  {path:"addpeople",component:AddpeopleComponent},
  {path:"image",component:ImageComponent},
  {path:"uploadImage",component:UploadImageComponent},
  {path:"products",component:ProductsComponent},
  {path:"groups",component:GroupsComponent},
  {path:"**",component:ManagerComponent}
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
