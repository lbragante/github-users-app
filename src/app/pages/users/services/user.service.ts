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

  getUsers(page: number, perPage: number, username: string): Observable<GitHubUser> {
    const params = new HttpParams()
      .set('q', `type:user${username ? `+${username}` : ''}`)
      .set('per_page', perPage.toString())
      .set('page', page.toString());

    return this.http.get<GitHubUser>(`${this.apiUrl}/search/users`, { params });
  }
}
