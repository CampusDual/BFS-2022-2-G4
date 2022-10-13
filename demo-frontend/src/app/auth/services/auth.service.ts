import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { API_CONFIG } from 'src/app/shared/api.config';
import { catchError, throwError } from 'rxjs';
import { CreateUserRequest } from 'src/app/model/rest/request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  registerUser(registerUser) {
    const url = API_CONFIG.createUser;
    const body : CreateUserRequest = new CreateUserRequest(registerUser);
    const headers = new HttpHeaders({
      'Content-type': 'application/json; charset=utf-8',
      //Authorization: 'Basic ' + btoa(`${environment.clientName}:${environment.clientSecret}`),
      //Authorization: 'Basic ' + Buffer.from(`${environment.clientName}:${environment.clientSecret}`, 'utf8').toString('base64'),
    });
    
    console.log(registerUser);
    return this.http.post(url, body, { headers }).pipe(
      catchError(e =>{
        return throwError(()=>e);
      })
    );
  }
}
