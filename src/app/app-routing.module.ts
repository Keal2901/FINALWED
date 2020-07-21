import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { InforPageComponent } from './infor-page/infor-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { DataListPageComponent } from './data-list-page/data-list-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent, },
  { path: 'information', component: InforPageComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'data', component: DataListPageComponent },
  { path: '_404', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
