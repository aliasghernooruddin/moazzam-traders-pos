import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from 'app/auth/auth.service';


@Injectable({
  providedIn: 'root'
})

export class AuthGuardService implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate() {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/admin/login'])
      return false;
    }
    return true;
  }
}
