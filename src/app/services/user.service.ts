import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {User} from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = [];

  constructor(
    private http: HttpClient
  ) { }

  fetchUsers() {
    const request: Observable<any> = this.http.get('https://jsonplaceholder.typicode.com/users');

    request.subscribe((data: User[]) => this.users = data);
  }
}
