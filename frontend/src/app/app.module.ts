import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { AppRoutes } from './app.routing';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptors';
import { MaterialModule } from './shared/materials.module';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        MaterialModule,
        HttpClientModule,
        RouterModule.forRoot(AppRoutes, {
            useHash: true
        }),
        NgbModule,
    ],
    declarations: [
        AppComponent,
        AuthLayoutComponent,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
