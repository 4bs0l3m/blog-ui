import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, switchMap, Observable, of, pipe } from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.authService.getUser().pipe(
      map((user) => {
        if (user) {
          return true;
        } else {
          this.router.navigateByUrl('auth');
          return false;
        }
      })
    );
  }
}
