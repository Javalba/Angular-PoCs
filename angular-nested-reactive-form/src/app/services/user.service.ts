import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { User } from '../models/user';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const USERS_API: string = `${environment.backend}/users`;

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  getUsers(): Observable<User[]>{
    return this.http
    .get(USERS_API)
    .map((response: Response) => response.json());
  }
}
