
import { HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})

export class AuthService {
    cachedRequests: Array<HttpRequest<any>> = [];

    constructor() { }

    public getToken(): string {
        return localStorage.getItem('token');
    }

    public isAuthenticated(): boolean {
        // get the token
        const token = this.getToken();
        // return a boolean reflecting 
        // whether or not the token is expired
        return this.tokenNotExpired(token);
    }

    public collectFailedRequest(request): void {
        this.cachedRequests.push(request);
    }

    public retryFailedRequests(): void {
        // retry the requests. this method can
        // be called after the token is refreshed
    }


    private tokenNotExpired(token) {
        return token != null
    }
}