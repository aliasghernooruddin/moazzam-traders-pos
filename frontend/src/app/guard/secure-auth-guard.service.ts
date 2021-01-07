import { Injectable } from '@angular/core';
import {
  CanActivate, CanActivateChild, CanLoad,
  Route, UrlSegment, ActivatedRouteSnapshot,
  RouterStateSnapshot, UrlTree, Router
} from '@angular/router';
import { AuthService } from 'app/auth/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SecureInnerPagesGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(public authService: AuthService, public router: Router) { }


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['dashboard/main']);
      return false
    }
    return true;
  }

  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }
}