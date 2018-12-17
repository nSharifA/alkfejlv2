import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UserOutput } from '../model/userOutput';
import { CinemaService } from '../cinema.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  private user:UserOutput;
  private form: any;
  
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private cinemaService:CinemaService
  ) { 
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
    });
  }

 
  hidePassword = true;
  message: string;

  get username() { return this.form.get('username'); }
  get password() { return this.form.get('password'); }
  get name() { return this.form.get('name'); }
  get email() { return this.form.get('email'); }

  ngOnInit() {

  }

  onSubmit() {
   
      
     this.user = new UserOutput( this.form.controls['username'].value,this.form.controls['password'].value,
     this.form.controls['name'].value,this.form.controls['email'].value);
     this.cinemaService.createUser(this.user).subscribe( data => {
        
        this.authService.registrationLogin(data.role,this.form.controls['username'].value,this.form.controls['password'].value);
        
        
      });
     
     
  }

}