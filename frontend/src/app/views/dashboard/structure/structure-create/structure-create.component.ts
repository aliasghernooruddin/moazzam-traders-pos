
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { PostResponse } from 'app/models/post-response';
import { Structure } from 'app/models/structure';
import { AlertService } from 'app/services/alert.service';
import { StructureService } from 'app/services/structure.service';

@Component({
  selector: 'app-structure-create',
  templateUrl: './structure-create.component.html',
  styleUrls: ['./structure-create.component.css']
})

export class StructureCreateComponent implements OnInit {

  addStructureForm: FormGroup
  structuresType = [{ name: 'Ware House', type: 'warehouse' }, { name: 'Shop', type: 'shop' }]
  data = new Structure()

  constructor(private alert:AlertService, private structureService:StructureService) {

  }

  onSubmit(formDirective: FormGroupDirective) {
    this.data = this.addStructureForm.value;
    this.structureService.addStructure(this.data).subscribe(
      data => {
        this.alert.openSnackBar(data.message)
        formDirective.resetForm()
      }, (err: PostResponse) => {
        console.log(err)
        this.alert.openSnackBar(err.error.message)
      }
    )
  }


  ngOnInit() {
    this.addStructureForm = new FormGroup({
      type: new FormControl(null, Validators.required),
      name: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      city: new FormControl('Karachi', Validators.required),
      country: new FormControl('Pakistan', Validators.required)
    });
  }
}