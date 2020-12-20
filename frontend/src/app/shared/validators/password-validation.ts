import { AbstractControl } from '@angular/forms';

export class PasswordValidation {

    static MatchPassword(AC: AbstractControl) {
        const password = AC.get('password').value; // to get value in input tag
        const confirmPassword = AC.get('cpassword').value; // to get value in input tag
        if (confirmPassword !== password) {
            AC.get('cpassword').setErrors({ MatchPassword: true });
        } else {
            return null;
        }
    }
}