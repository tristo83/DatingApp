import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  alertify: any;
  constructor(
    private authService: AuthService,
    private router: Router,
    private alertifyService: AlertifyService
    ) {}

  canActivate(): boolean {
    if (this.authService.loggedIn()){
      return true;
    }
    this.alertify.error('you shall not pass');
    this.router.navigate(['/home']);
    return false;
  }
}
