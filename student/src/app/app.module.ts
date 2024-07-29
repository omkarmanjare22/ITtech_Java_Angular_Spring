import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { FormsModule} from '@angular/forms';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { LoginComponent } from './login/login.component';
import { LoginListComponent } from './login-list/login-list.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ContactComponent } from './contact/contact.component';
import { Contact2Component } from './contact2/contact2.component';
import { PlacementComponent } from './placement/placement.component';
import { PlacementOverviewComponent } from './placement-overview/placement-overview.component';
import { PlacedStudentsComponent } from './placed-students/placed-students.component';
import { FresherEmploymentComponent } from './fresher-employment/fresher-employment.component';
import { OurClientsComponent } from './our-clients/our-clients.component';
import { ServicesComponent } from './services/services.component';
import { SubNavComponent } from './sub-nav/sub-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    CreateStudentComponent,
    UpdateStudentComponent,
    StudentDetailsComponent,
    LoginComponent,
    LoginListComponent,
    HomeComponent,
    AboutusComponent,
    TestimonialComponent,
    ContactComponent,
    Contact2Component,
    PlacementComponent,
    PlacementOverviewComponent,
    PlacedStudentsComponent,
    FresherEmploymentComponent,
    OurClientsComponent,
    ServicesComponent,
    SubNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
