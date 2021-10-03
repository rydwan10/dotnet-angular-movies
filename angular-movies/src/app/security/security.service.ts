import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  authenticationResponse,
  userCredentials,
  userDTO,
} from './security.model';

@Injectable({
  providedIn: 'root',
})
export class SecurityService {
  constructor(private http: HttpClient) {}

  private apiUrl = environment.apiURL + '/accounts';
  private readonly tokenKey: string = 'token';
  private readonly expirationTokenKey: string = 'token-expiration';
  private readonly roleField = 'role';

  getUsers(page: number, recordsPerPage: number): Observable<any> {
    let params = new HttpParams();
    params.append('page', page.toString());
    params.append('recordsPerPage', recordsPerPage.toString());
    return this.http.get<userDTO>(`${this.apiUrl}/listUsers`, {
      observe: 'response',
      params: params,
    });
  }

  makeAdmin(userId: string) {
    const headers = new HttpHeaders('Content-Type: application/json');
    return this.http.post(`${this.apiUrl}/makeAdmin`, JSON.stringify(userId), {
      headers: headers,
    });
  }

  removeAdmin(userId: string) {
    const headers = new HttpHeaders('Content-Type: application/json');
    return this.http.post(
      `${this.apiUrl}/removeAdmin`,
      JSON.stringify(userId),
      {
        headers: headers,
      }
    );
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem(this.tokenKey);
    if (!token) {
      return false;
    }

    const expiration = localStorage.getItem(this.expirationTokenKey);
    const expirationDate = new Date(expiration);

    if (expirationDate <= new Date()) {
      this.logout();
      return false;
    }

    return true;
  }

  getFieldFromJWT(field: string) {
    const token = localStorage.getItem(this.tokenKey);
    if (!token) {
      return '';
    }

    const dataToken = JSON.parse(atob(token.split('.')[1]));

    return dataToken[field];
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.expirationTokenKey);
  }

  getRole(): string {
    return this.getFieldFromJWT(this.roleField);
  }

  register(
    userCredentials: userCredentials
  ): Observable<authenticationResponse> {
    return this.http.post<authenticationResponse>(
      this.apiUrl + '/register',
      userCredentials
    );
  }

  login(userCredentials: userCredentials): Observable<authenticationResponse> {
    return this.http.post<authenticationResponse>(
      this.apiUrl + '/login',
      userCredentials
    );
  }

  saveToken(authenticationResponse: authenticationResponse) {
    localStorage.setItem(this.tokenKey, authenticationResponse.token);
    localStorage.setItem(
      this.expirationTokenKey,
      authenticationResponse.expiration.toString()
    );
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }
}
