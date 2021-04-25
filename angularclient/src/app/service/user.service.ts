import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/users';
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public find(id: number): Observable<User> {
    return this.http.get<User>(this.usersUrl + '/' + id);
  }

  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }

  public delete(user: User) {
    return this.http.delete(this.usersUrl + '/' + user.id)
  }
}
