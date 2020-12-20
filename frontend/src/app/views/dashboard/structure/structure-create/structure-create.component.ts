
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-structure-create',
  templateUrl: './structure-create.component.html',
  styleUrls: ['./structure-create.component.css']
})

export class StructureCreateComponent implements OnInit {


  addStructureForm: FormGroup
  structuresType = [{ name: 'Ware House', type: 'warehouse' }, { name: 'Shop', type: 'shop' }]

  constructor() {

  }

  onSubmit() {
    console.log(this.addStructureForm);
    console.log(this.addStructureForm.get('country').value);
  }


  ngOnInit() {
    this.addStructureForm = new FormGroup({
      structureType: new FormControl(null, Validators.required),
      structureName: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      city: new FormControl('Karachi', Validators.required),
      country: new FormControl('Pakistan', Validators.required)
    });
  }
}