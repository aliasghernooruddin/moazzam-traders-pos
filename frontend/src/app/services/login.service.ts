import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { LoginResponse } from '../models/login-response';
import { UserLogin } from '../models/user-login.model';

const BASE_URL = environment.BASE_URL

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  constructor(private http: HttpClient) { }

  login(userLogin: UserLogin): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(BASE_URL + "/login-user", userLogin)
  }

}
