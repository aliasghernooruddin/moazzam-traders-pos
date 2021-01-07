import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostResponse } from 'app/models/post-response';
import { UserLogin } from 'app/models/user-login.model';
import { AlertService } from 'app/services/alert.service';
import { LoginService } from 'app/services/login.service';

declare var $: any;

@Component({
    selector: 'admin-login',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit, OnDestroy {

    test: Date = new Date();

    loginForm: FormGroup

    user = new UserLogin()

    constructor(private loginService: LoginService, private router: Router, private alert: AlertService) { }

    checkFullPageBackgroundImage() {
        var $page = $('.full-page');
        var image_src = $page.data('image');

        if (image_src !== undefined) {
            var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
            $page.append(image_container);
        }
    };

    onSubmit() {
        this.user.email = this.loginForm.get('email').value
        this.user.password = this.loginForm.get('password').value
        this.loginService.login(this.user).subscribe(res => {
            if (res) {
                localStorage.setItem('token', res.token)
                this.router.navigateByUrl('/dashboard/main')
            }
        }, (err: PostResponse) => {
            console.log(err)
            this.alert.openSnackBar(err.error.message)
        })
    }

    ngOnInit() {
        this.loginForm = new FormGroup({
            email: new FormControl(null, [Validators.email, Validators.required]),
            password: new FormControl(null, Validators.required),
        });

        this.checkFullPageBackgroundImage();
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');

        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            $('.card').removeClass('card-hidden');
        }, 700)
    }

    ngOnDestroy() {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');
    }


}
