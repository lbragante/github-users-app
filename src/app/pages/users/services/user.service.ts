import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { GitHubUser } from 'src/app/core/models/github-user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://api.github.com';

  constructor(private http: HttpClient) {}

  getAllUsers(page: number, perPage: number): Observable<GitHubUser> {
    let params = new HttpParams()
      .set('q', 'type:user')
      .set('per_page', perPage.toString())
      .set('page', page.toString());

    return this.http.get<GitHubUser>(`${this.apiUrl}/search/users`, { params });
  }

  getUserByUsername(username: string): Observable<GitHubUser> {
    let params = new HttpParams()
      .set('q', `user:${username}`);

    return this.http.get<GitHubUser>(`${this.apiUrl}/search/users`, { params });
  }
}
