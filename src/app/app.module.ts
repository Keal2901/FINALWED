import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DataListPageComponent } from './data-list-page/data-list-page.component';
import { InforPageComponent } from './infor-page/infor-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { AppLoadingComponent } from './share/app-loading/app-loading.component';
import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DataListPageComponent,
    InforPageComponent,
    AdminPageComponent,
    NotFoundComponent,
    AppLoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    FormsModule,
    AccordionModule,
    DialogModule,
    BrowserAnimationsModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
