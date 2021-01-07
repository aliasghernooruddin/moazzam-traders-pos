import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GetResponse } from 'app/models/get-response';
import { PostResponse } from 'app/models/post-response';
import { UserCreate } from 'app/models/user-create.model';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

const BASE_URL = environment.BASE_URL

@Injectable({
    providedIn: 'root'
})

export class UserService {

    constructor(private http: HttpClient) { }

    createUser(user: UserCreate): Observable<PostResponse> {
        return this.http.post<PostResponse>(BASE_URL + "/register-user", user)
    }

    getUsers() {
        return this.http.get<GetResponse>(BASE_URL + "/get-users")
    }

}
