import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { LoginComponent } from './login/login.component';
import { LoginListComponent } from './login-list/login-list.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { ContactComponent } from './contact/contact.component';
import { PlacementComponent } from './placement/placement.component';
import { PlacementOverviewComponent } from './placement-overview/placement-overview.component';
import { PlacedStudentsComponent } from './placed-students/placed-students.component';
import { FresherEmploymentComponent } from './fresher-employment/fresher-employment.component';
import { OurClientsComponent } from './our-clients/our-clients.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [

  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path :'login_list', component:LoginListComponent},
  {path:'login',component:LoginComponent},
  {path: 'students', component: StudentListComponent},
  {path: 'create-student', component: CreateStudentComponent},
  {path: '', redirectTo: 'students', pathMatch: 'full'},
  {path: 'update-student/:id', component: UpdateStudentComponent},
  {path: 'student-details/:id', component: StudentDetailsComponent},
  {path:'Testimonials',component:TestimonialComponent},
  {path:'contactus',component:ContactComponent},
  {path:'placement',component:PlacementComponent},
{path:'overview',component:PlacementOverviewComponent},
{path:'placed-students',component:PlacedStudentsComponent},
{path:'fresh-employment',component:FresherEmploymentComponent},
{path:'clients',component:OurClientsComponent},
{path:'services',component:ServicesComponent},
{ path: '', redirectTo: '/services', pathMatch: 'full' },
];

const routerOptions: ExtraOptions = {
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled'
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }
