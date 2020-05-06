import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { FinduserComponent } from './finduser/finduser.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { ManageairportComponent } from './manageairport/manageairport.component';
import { ManageflightComponent } from './manageflight/manageflight.component';
import { AddairportComponent } from './addairport/addairport.component';
import { SearchairportComponent } from './searchairport/searchairport.component';
import { ViewairportComponent } from './viewairport/viewairport.component';
import { AddflightComponent } from './addflight/addflight.component';
import { SearchflightComponent } from './searchflight/searchflight.component';
import { ViewflightComponent } from './viewflight/viewflight.component';
import { DeleteflightComponent } from './deleteflight/deleteflight.component';
import { UpdateflightComponent } from './updateflight/updateflight.component';

const routes: Routes = [
{path:'register',component:RegisterComponent}, 
{path:'view',component:ViewuserComponent},
{path:'find',component:FinduserComponent},
{path:'update',component:UpdateuserComponent},
{path:'delete',component:DeleteuserComponent},
{path:'addairport',component:AddairportComponent},
{path:'searchairport',component:SearchairportComponent},
{path:'viewairport',component:ViewairportComponent},
{path:'manageairport',component:ManageairportComponent},
{path:'addflight',component:AddflightComponent},
{path:'searchflight',component:SearchflightComponent},
{path:'viewflight',component:ViewflightComponent},
{path:'deleteflight',component:DeleteflightComponent},
{path:'updateflight',component:UpdateflightComponent},
{path:'manageflight',component:ManageflightComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
