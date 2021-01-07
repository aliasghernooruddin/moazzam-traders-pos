import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-supplier-create',
  templateUrl: './supplier-create.component.html',
  styleUrls: ['./supplier-create.component.css']
})

export class SupplierCreateComponent implements OnInit {

  constructor(private router: Router) { }

  addSupplierForm: FormGroup

  onSubmit() {
    this.router.navigate(['/admin/login'])
  }

  ngOnInit() {
    this.addSupplierForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      city: new FormControl('Karachi', Validators.required),
      country: new FormControl('Pakistan', Validators.required),
      phoneNumber: new FormControl(null, Validators.required),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

}
