import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificateComponent } from './certificate/certificate.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { InterestsComponent } from './interests/interests.component';
import { LanguageComponent } from './language/language.component';
import { LoginComponent } from './login/login.component';
import { ProjectsComponent } from './projects/projects.component';
import { SigninComponent } from './signin/signin.component';
import { SkillsComponent } from './skills/skills.component';
import { TemplatesComponent } from './templates/templates.component';
import { UserDetailsComponent } from './user-details/user-details.component';
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
  {path:"addforms", component:FormsComponent,
  children: [
    {path:"education",component:EducationComponent},
    {path:"experience", component:ExperienceComponent},
    {path:"skills", component:SkillsComponent},
    {path:"interests",component:InterestsComponent},
    {path:"language",component:LanguageComponent},
    {path:"projects",component:ProjectsComponent},
    {path:"userDetails",component:UserDetailsComponent},
    {path:"certificate",component:CertificateComponent}  
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
