import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from 'app/auth/auth.service';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/do';

export class JwtInterceptor implements HttpInterceptor {

    constructor(public auth: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        console.log("hello2")
        return next.handle(request).do((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                // do stuff with response if you want
                console.log("add bs here")
            }
        }, (err: any) => {
            if (err instanceof HttpErrorResponse) {
                if (err.status === 401) {
                    console.log("add bs2 here")
                    this.auth.collectFailedRequest(request);
                }
                console.log("add bs3 here")
            }
        });
    }
}