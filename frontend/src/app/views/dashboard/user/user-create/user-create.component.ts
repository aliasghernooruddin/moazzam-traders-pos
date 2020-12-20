import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
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
  filteredSelectediews: Observable<string[]>;
  selectedViews: string[] = [];
  allViews: string[] = ['Supplier Create', 'Suppliers List', 'Lime', 'Orange', 'Strawberry'];

  @ViewChild('viewInput') viewInput: ElementRef<HTMLInputElement>;


  addUserForm: FormGroup

  constructor() {
    this.filteredSelectediews = this.viewCtrl.valueChanges.pipe(
      startWith(null),
      map((view: string | null) => view ? this._filter(view) : this.allViews.slice()));
  }


  remove(view: string): void {
    const index = this.selectedViews.indexOf(view);

    if (index >= 0) {
      this.selectedViews.splice(index, 1);
    }
    this.allViews.push(view)
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.selectedViews.push(event.option.viewValue);

    const index = this.allViews.indexOf(event.option.value);

    if (index >= 0) {
      this.allViews.splice(index, 1);
    }

    this.viewInput.nativeElement.value = '';
    this.viewCtrl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.allViews.filter(view => view.toLowerCase().indexOf(filterValue) === 0);
  }

  onSubmit() {
    console.log(this.addUserForm);
    console.log(this.addUserForm.get('email').value);
  }


  ngOnInit() {
    this.addUserForm = new FormGroup({
      email: new FormControl(null, [Validators.email, Validators.required]),
      fname: new FormControl(null, Validators.required),
      lname: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      city: new FormControl('Karachi', Validators.required),
      country: new FormControl('Pakistan', Validators.required),
      mobNumber: new FormControl(null, Validators.required),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }
}