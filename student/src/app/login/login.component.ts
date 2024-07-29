import { Component, OnInit } from '@angular/core';
import { LogIn } from '../login';
import { LoginService } from '../login.service';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  logIn: LogIn = new LogIn();
  constructor(private logInService: LoginService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveLogIn(){
    this.logInService.createLogIn(this.logIn).subscribe( data =>{
      console.log(data);
      this.goToStudentList();
    },
    error => console.log(error));
  }

  goToStudentList(){
    this.router.navigate(['/login_list']);
  }
  
  onSubmit(){
    console.log(this.logIn);
    this.saveLogIn();
  }
}

