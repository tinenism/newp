import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './comps/home/home.component';
import { OverviewComponent } from './comps/overview/overview.component';

const routes: Routes = [
{
  path:"home", component:HomeComponent
},
{
  path:"overview", component:OverviewComponent
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
