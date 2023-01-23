import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, ReplaySubject } from 'rxjs';
import { UserDTO } from 'src/app/@core/dtos/userDTO';
import { ApiBaseService } from 'src/app/@core/services/api-base.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends ApiBaseService<UserDTO> {
  constructor(private _httpClient: HttpClient) {
    super(_httpClient, 'auth');
    this.getCurrentUser().subscribe((res) => res);
  }
  private _authucated = false;
  private user = new ReplaySubject<UserDTO>(1);
  private setUser(_user: UserDTO) {
    this.user.next(_user);
  }
  public getUser() {
    return this.user.asObservable();
  }
  public set authucated(value: boolean) {
    this._authucated = value;
  }
  public get authucated() {
    return this._authucated;
  }
  public login(email: string, password: string) {
    return this.post('auth/login', {
      email: email,
      password: password,
    }).pipe(
      map((res) => {
        if (res && res.data) {
          this.setAuthToken(res.data);
          this.getCurrentUser().subscribe((res) => res);

          this.authucated = true;
          return true;
        } else {
          return false;
        }
      })
    );
  }
  public signUp(email: string, password: string) {
    const payload = {
      email: email,
      password: password,
    };
    return this.post('auth/signup', payload).pipe(
      map((res) => {
        if (res && res.data) {
          return res.data;
        } else {
          return null;
        }
      })
    );
  }
  private getCurrentUser() {
    return this.get('auth/currentUser', null, null).pipe(
      map((res) => {
        if (res && res.data) {
          this.setUser(<UserDTO>res.data);
          return <UserDTO>res.data;
        } else {
          return null;
        }
      })
    );
  }
}
