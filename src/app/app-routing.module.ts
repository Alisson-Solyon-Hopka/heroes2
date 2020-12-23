import { DescriptionComponent } from './marvel/description/description.component';
import { ListComponent } from './marvel/list/list.component';
import { HomeComponent } from './marvel/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'list',
    component: ListComponent
  },
  {
    path: 'list/:id',
    component: DescriptionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
