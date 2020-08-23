import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {SubmitApplicationPageComponent} from './submit-application-page/submit-application-page.component';
import {ViewApplicationPageComponent} from './view-application-page/view-application-page.component';

const routes: Routes = [
  {path:'', redirectTo:'home' ,pathMatch:'full' },
  {path:'home' , component:HomePageComponent},
  {path:'view-application', component:ViewApplicationPageComponent},
  {path:'submit-application' , component : SubmitApplicationPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
