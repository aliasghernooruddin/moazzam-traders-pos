import { Component, OnInit } from '@angular/core';
import { PostResponse } from 'app/models/post-response';
import { AlertService } from 'app/services/alert.service';
import { StructureService } from 'app/services/structure.service';

declare var $: any;

@Component({
  selector: 'app-structures',
  templateUrl: './structures.component.html',
  styleUrls: ['./structures.component.css']
})
export class StructuresComponent implements OnInit {


  users = [];

  constructor(private structureService: StructureService, private alert: AlertService) { }

  ngOnInit() {
    this.structureService.getStructure().subscribe(
      data => {
        console.log(data)
        this.users = data.data
      }, (err: PostResponse) => {
        this.alert.openSnackBar(err.error.message)
        console.log(err)
      }
    )
  }

  ngAfterViewInit() {
    $('#datatable').DataTable({
      "pagingType": "full_numbers",
      "lengthMenu": [
        [10, 25, 50, -1],
        [10, 25, 50, "All"]
      ],
      responsive: true,
      language: {
        search: "_INPUT_",
        searchPlaceholder: "Search records",
      }

    });

  }
}