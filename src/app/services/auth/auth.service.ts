import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {User} from "../../interfaces/user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user: User | undefined;

  constructor(private _http: HttpClient) {
  }

  /**
   * this function sets the user
   *
   * @returns user
   */
  setUser(user: User): void {
    this.user = user;
  }

  /**
   * this function gets the user
   *
   * @returns user
   */
  getUser(): User | undefined {
    return this.user;
  }

  /**
   * this function logs in the user
   *
   * @returns user
   */

  public login(email: String, password: String): Observable<User> {
    return this._http.post(environment.API_URL + '/admin/login', [email, password], {withCredentials: true, }, ) as Observable<User>;
  }

  /**
   * this function logs out the user
   *
   * @returns user
   */

  public logout(): void {
    return this.user = undefined
  }
}
