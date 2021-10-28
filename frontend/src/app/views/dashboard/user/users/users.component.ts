import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PostResponse } from 'app/models/post-response';
import { AlertService } from 'app/services/alert.service';
import { UserService } from 'app/services/user.service';

declare var $: any;


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})


export class UsersComponent implements OnInit, AfterViewInit {

  users = [];

  displayedColumns = ['id', 'name', 'progress', 'color'];
  // dataSource: MatTableDataSource<UserData>;
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private userService: UserService, private alert: AlertService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
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