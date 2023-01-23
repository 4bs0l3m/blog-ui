import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}
  loginForm = {
    email: 'cemreozer.e@gmail.com',
    password: 'asdzxc',
  };
  ngOnInit() {}
  clickLogin() {
    this.authService
      .login(this.loginForm.email, this.loginForm.password)
      .subscribe((res) => {
        console.log(res);
        this.router.navigateByUrl('/admin');
      });
  }
}
