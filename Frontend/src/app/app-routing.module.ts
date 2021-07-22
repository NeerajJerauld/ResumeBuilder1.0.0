import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { TemplatesComponent } from './templates/templates.component';
import { ViewResumeComponent } from './view-resume/view-resume.component';
import { ViewWebsiteComponent } from './view-website/view-website.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"login",component:LoginComponent},
  {path:"signin",component:SigninComponent},
  {path:"templates",component:TemplatesComponent},
  {path:"viewresume",component:ViewResumeComponent},
  {path:"viewwebsite",component:ViewWebsiteComponent},
  {path:"education",component:EducationComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
