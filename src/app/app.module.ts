import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardContentComponent } from './dashboard-content/dashboard-content.component';
import { ParadeComponent } from './parade/parade.component';
import { ParadeFormComponent } from './parade-form/parade-form.component';
import { UpdateParadeFormComponent } from './update-parade-form/update-parade-form.component';
import { NavbarClientComponent } from './navbar-client/navbar-client.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { HomepageContentComponent } from './homepage-content/homepage-content.component';
import { HomepageFooterComponent } from './homepage-footer/homepage-footer.component';
import { LoginComponent } from './login/login.component';
import { FormationFormComponent } from './formation-form/formation-form.component';
import { FormationComponent } from './formation/formation.component';
import { DistanceFormComponent } from './distance-form/distance-form.component';
import { ClientParadeComponent } from './client-parade/client-parade.component';
import { InscriptionParadeFormComponent } from './inscription-parade-form/inscription-parade-form.component';
import {VisiteComponent} from "./visite/visite.component";
import {VisiteFormComponent} from "./visite-form/visite-form.component";
import { UpdateVisiteFormComponent } from './update-visite-form/update-visite-form.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';  
@NgModule({
    declarations: [
      AppComponent,
      MenuComponent,
      DashboardContentComponent,
      ParadeComponent,
      ParadeFormComponent,
      UpdateParadeFormComponent,
      NavbarClientComponent,
      NavbarAdminComponent,
      HomepageContentComponent,
      HomepageFooterComponent,
      LoginComponent,
      FormationFormComponent,
      FormationComponent,
      DistanceFormComponent,
      ClientParadeComponent,
      InscriptionParadeFormComponent,
    VisiteComponent,
    VisiteFormComponent,
    UpdateVisiteFormComponent


],
imports: [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  FormsModule,
  ReactiveFormsModule,
  AppRoutingModule,BrowserAnimationsModule, BsDatepickerModule.forRoot()  


],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
