import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewResumeComponent } from './view-resume/view-resume.component';
import { ViewWebsiteComponent } from './view-website/view-website.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TokenInterceptorService } from './token-interceptor.service';

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
import { RouterModule } from '@angular/router';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';
import { FormsComponent } from './forms/forms.component';
import { UserDetailsComponent } from './user-details/user-details.component';

import { FormheaderComponent } from './formheader/formheader.component';
import { OthersComponent } from './others/others.component';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import { FormservicesService } from './formservices.service';
import { WeblinkComponent } from './weblink/weblink.component';
import { AuthService } from './auth.service';
import { Template1Component } from './template1/template1.component';
import { Template2Component } from './template2/template2.component';
import { Template3Component } from './template3/template3.component';
import { Template4Component } from './template4/template4.component';
import { Template5Component } from './template5/template5.component';
import { NgxPrintModule } from 'ngx-print';
import { UpdatedetailsComponent } from './updatedetails/updatedetails.component';

import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SigninComponent,
    DashboardComponent,
    ViewResumeComponent,
    ViewWebsiteComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    SidenavComponent,
    ViewdashboardComponent,
    EducationComponent,
    ExperienceComponent,
    FormsComponent,
    UserDetailsComponent,
    
    FormheaderComponent,
    OthersComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    WeblinkComponent,
    Template1Component,
    Template2Component,
    Template3Component,
    Template4Component,
    Template5Component,
    UpdatedetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPrintModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
    
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
  
  providers: [AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    },
    FormservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

