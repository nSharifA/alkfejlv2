import { Injectable, NgModule } from '@angular/core';
import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(request.url!='http://localhost:8080/users'){
            const authReq = request.clone({
                   headers: new HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': `Basic ${localStorage.getItem("token")}`
                    })
                });
                
                console.log('Intercepted HTTP call', authReq);
                
                return next.handle(authReq);
            }else{
                return next.handle(request);
        }
    }
}
