import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TemplatesComponent } from './templates/templates.component';
import { ViewResumeComponent } from './view-resume/view-resume.component';
import { ViewWebsiteComponent } from './view-website/view-website.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';


import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ViewdashboardComponent } from './viewdashboard/viewdashboard.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterframeComponent } from './registerframe/registerframe.component';
import { RouterModule } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { FormsComponent } from './forms/forms.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ProjectsComponent } from './projects/projects.component';
import { LanguageComponent } from './language/language.component';
import { SkillsComponent } from './skills/skills.component';
import { CertificateComponent } from './certificate/certificate.component';
import { InterestsComponent } from './interests/interests.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    DashboardComponent,
    TemplatesComponent,
    ViewResumeComponent,
    ViewWebsiteComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SidenavComponent,
    ViewdashboardComponent,
    RegisterframeComponent,
    EducationComponent,
    ExperienceComponent,
    FormsComponent,
    UserDetailsComponent,
    ProjectsComponent,
    LanguageComponent,
    SkillsComponent,
    CertificateComponent,
    InterestsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    
       // * MATERIAL IMPORTS
       MatSidenavModule,
       MatToolbarModule,
       MatMenuModule,
       MatIconModule,
       MatDividerModule,
       MatListModule,
       BrowserAnimationsModule,
       MatGridListModule,
       MatCardModule,
       MatButtonModule,
       LayoutModule,

    PdfViewerModule,
      NgbModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
