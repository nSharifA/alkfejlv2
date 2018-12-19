import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './model/User';
import { Router } from '@angular/router';
import { CinemaService } from './cinema.service';

export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': ''
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  redirectUrl: string;
  user: User;
  token: string;

  private authUrl = '/api/users';

  constructor(
    private http: HttpClient,private cinemaService:CinemaService,private router: Router,
  ) { }

  login(username: string, password: string) {
    try {
      this.token = btoa(`${username}:${password}`);
      httpOptions.headers = httpOptions.headers.set('Authorization', `Basic ${this.token}`);
      localStorage.setItem('token',this.token);
      this.http.post<User>('http://localhost:8080/users/login',httpOptions).subscribe(data =>{
       
     localStorage.setItem('user',data.role);
      this.isLoggedIn = true;
      this.router.navigate(['movie']);
      });
      
      
    }
    catch (e) {
      console.log(e);
      throw e;
    }
  }
  getToken(){
    return this.token;
  };
  registrationLogin(role:string,username:string,password:string){
    this.token = btoa(`${username}:${password}`);
    this.isLoggedIn = true;
    localStorage.setItem('token',this.token);
    this.router.navigate(['movie']);
    localStorage.setItem('role',role);
  }
  logout() {
    httpOptions.headers = httpOptions.headers.set('Authorization', ``);
    this.isLoggedIn = false;
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.user = null;
    this.token = null;
  
  }
  public isAuthenticated(): boolean {
    if(localStorage.getItem('token'))return true;
   
    return false;
  }
}
