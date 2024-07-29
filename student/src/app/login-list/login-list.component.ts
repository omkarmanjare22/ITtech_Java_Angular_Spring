import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogIn } from '../login';
import { LoginService } from '../login.service';
@Component({
  selector: 'app-login-list',
  templateUrl: './login-list.component.html',
  styleUrl: './login-list.component.css'
})
export class LoginListComponent  implements OnInit {

  logIn!: LogIn[];

  constructor(private logInService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
    this.getLogIn();
  }
  getLogIn() {
    this.logInService.getLogInList().subscribe(data => {
      this.logIn = data;  }
);
  }

  // logInDetails(id: number){
  //   this.router.navigate(['student-details', id]);
  // }

  // updateStudent(id: number){
  //   this.router.navigate(['update-student', id]);
  // }

  // deleteStudent(id: number){
  //   this.studentService.deleteStudent(id).subscribe( data => {
  //     console.log(data);
  //     this.getStudents();
  //   })
  }

