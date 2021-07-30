import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';

import { LoginComponent } from './login/login.component';

import { SigninComponent } from './signin/signin.component';

import { TemplatesComponent } from './templates/templates.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ViewResumeComponent } from './view-resume/view-resume.component';
import { ViewWebsiteComponent } from './view-website/view-website.component';
import { AuthGuard } from './auth.guard';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import { Template1Component } from './template1/template1.component';
import { Template2Component } from './template2/template2.component';
import { Template3Component } from './template3/template3.component';
import { Template4Component } from './template4/template4.component';
import { Template5Component } from './template5/template5.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"dashboard",
  canActivate:[AuthGuard],
  component:DashboardComponent},
  {path:"login",component:LoginComponent},
  {path:"signin",component:SigninComponent},
  {path:"templates",component:TemplatesComponent},
 
    {path:"template1",component:Template1Component},
    {path:"template2",component:Template2Component},
    {path:"template3",component:Template3Component},
    {path:"template4",component:Template4Component},
    {path:"template5",component:Template5Component},
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
  
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
