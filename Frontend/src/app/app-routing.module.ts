import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';

import { SigninComponent } from './signin/signin.component';

import { UserDetailsComponent } from './user-details/user-details.component';
import { ViewResumeComponent } from './view-resume/view-resume.component';
import { ViewWebsiteComponent } from './view-website/view-website.component';
import { AuthGuard } from './auth.guard';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import { WeblinkComponent } from './weblink/weblink.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"dashboard",
  canActivate:[AuthGuard],
  component:DashboardComponent},
  {path:"login",component:LoginComponent},
  {path:"signin",component:SigninComponent},
  {path:"viewresume",component:ViewResumeComponent},
  {path:"viewwebsite",component:ViewWebsiteComponent},
  // {path:"addforms", component:FormsComponent,
  // children: [
  //   {path:"education",component:EducationComponent},
  //   {path:"experience", component:ExperienceComponent},
  //   {path:"skills", component:SkillsComponent},
  //   {path:"interests",component:InterestsComponent},
  //   {path:"language",component:LanguageComponent},
  //   {path:"projects",component:ProjectsComponent},
  //   {path:"userDetails",component:UserDetailsComponent},
  //   {path:"certificate",component:CertificateComponent}  
  // ]}
  {path:"addforms", component:FormsComponent},  
    {path:"form1",component:Form1Component},
    {path:"form2", component:Form2Component},
   
    {path:"form3",component:Form3Component},
   {path:"weblink/:userID",component:WeblinkComponent}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
