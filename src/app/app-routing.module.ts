import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GiftsComponent } from './componentes/gifts/gifts.component';
import { GroupsComponent } from './componentes/groups/groups.component';
import { ManagerComponent } from './componentes/manager/manager.component';
import { ProductsComponent } from './componentes/products/products.component';

const routes: Routes = [
  {path:"products",component:ProductsComponent},
  {path:"groups",component:GroupsComponent},
  {path:"**",component:ManagerComponent}
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
