import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DragndropComponent } from './dragndrop/dragndrop.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './service/auth-guard.service';
import { DragndropmatComponent } from './dragndropmat/dragndropmat.component';

const routes: Routes = [
// {path: 'login', component:LoginComponent, canActivate: [AuthGuard]},
{path: 'login', component:LoginComponent},
{path: 'datepicker', component: DatepickerComponent},
{path: 'dragndrop', component: DragndropComponent},
{path: 'matdragndrop', component: DragndropmatComponent},
{path:'', component :DatepickerComponent},
{path:'***', component :PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
