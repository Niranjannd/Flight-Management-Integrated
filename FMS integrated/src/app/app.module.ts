import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { FinduserComponent } from './finduser/finduser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ManageairportComponent } from './manageairport/manageairport.component';

import { ManageflightComponent } from './manageflight/manageflight.component';
import { AddairportComponent } from './addairport/addairport.component';
import { SearchairportComponent } from './searchairport/searchairport.component';
import { ViewairportComponent } from './viewairport/viewairport.component';
import { AddflightComponent } from './addflight/addflight.component';
import { SearchflightComponent } from './searchflight/searchflight.component';
import { ViewflightComponent } from './viewflight/viewflight.component';
import { UpdateflightComponent } from './updateflight/updateflight.component';
import { DeleteflightComponent } from './deleteflight/deleteflight.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ViewuserComponent,
    FinduserComponent,
    DeleteuserComponent,
    UpdateuserComponent,
    AddairportComponent,
    SearchairportComponent,
    ViewairportComponent,
    ManageairportComponent,
   AddflightComponent,
   SearchflightComponent,
   ViewflightComponent,
   UpdateflightComponent,
   DeleteflightComponent,
    ManageflightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
