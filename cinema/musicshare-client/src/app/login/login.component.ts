import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  form = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
  hidePassword = true;
  message: string;

  get username() { return this.form.get('username'); }
  get password() { return this.form.get('password'); }

  ngOnInit() {
  }

  async onSubmit() {
    try {
     this.authService.login(this.username.value, this.password.value);
      if (this.authService.isLoggedIn) {
        this.router.navigate(['movie']);
      } else {
        this.router.navigate(['/']);
      }
    }
    catch(e) {
      this.message = 'Cannot log in!'
    }
  }

}