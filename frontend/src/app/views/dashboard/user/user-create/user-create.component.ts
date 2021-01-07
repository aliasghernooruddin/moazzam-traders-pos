import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { PostResponse } from 'app/models/post-response';
import { UserCreate } from 'app/models/user-create.model';
import { AlertService } from 'app/services/alert.service';
import { StructureService } from 'app/services/structure.service';
import { UserService } from 'app/services/user.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})

export class UserCreateComponent implements OnInit {

  removable = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  viewCtrl = new FormControl();
  filteredSelectediews: Observable<Object>;
  selectedViews = [];
  tempViews;
  allViews = [
    {
      name: 'Supplier Create',
      child: false
    },
    {
      name: 'Suppliers List',
      child: true,
      update: false,
      delete: false,
    }
  ]
  structuresDropdown = [];

  @ViewChild('viewInput') viewInput: ElementRef<HTMLInputElement>;

  addUserForm: FormGroup

  user = new UserCreate()

  constructor(private userService: UserService, private alert: AlertService, private structureService: StructureService) {
    this.filteredSelectediews = this.viewCtrl.valueChanges.pipe(
      startWith(null),
      map((view) => view ? this._filter(view) : this.allViews.slice()));
  }


  remove(view): void {
    const index = this.selectedViews.indexOf(view);

    if (index >= 0) {
      this.selectedViews.splice(index, 1);
    }
    this.allViews.push(view)
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedViews.push(event.option.value);

    const index = this.allViews.indexOf(event.option.value);

    if (index >= 0) {
      this.allViews.splice(index, 1);
    }

    this.viewInput.nativeElement.value = '';
    this.viewCtrl.setValue(null);
  }

  private _filter(value) {
    if (value.name) {
      value = value.name
    }
    const filterValue = value.toLowerCase();

    return this.allViews.filter(view => view.name.toLowerCase().indexOf(filterValue) === 0);
  }

  onSubmit(formDirective: FormGroupDirective) {
    this.user = this.addUserForm.value;
    this.user.views = this.selectedViews;
    this.user.roles = ['user']
    this.userService.createUser(this.user).subscribe(
      data => {
        this.alert.openSnackBar(data.message)
        formDirective.resetForm()
        this.allViews = Object.create(this.tempViews)
        this.selectedViews = []
      }, (err: PostResponse) => {
        console.log(err)
        this.alert.openSnackBar(err.error.message)
      }
    )
  }

  initializeForm() {
    this.addUserForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      city: new FormControl('Karachi', Validators.required),
      country: new FormControl('Pakistan', Validators.required),
      phoneNumber: new FormControl(null, Validators.required),
      status: new FormControl('true', Validators.required),
      structureId: new FormControl(null, Validators.required),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  getStructureDropdown() {
    this.structureService.getStructureDropdown().subscribe(res => {
      this.structuresDropdown = res.data
    })
  }


  ngOnInit() {
    this.tempViews = Object.assign({}, this.allViews);
    this.initializeForm();
    this.getStructureDropdown();
  }
}