import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { userDTO } from '../security.model';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-users-index',
  templateUrl: './users-index.component.html',
  styleUrls: ['./users-index.component.css'],
})
export class UsersIndexComponent implements OnInit {
  constructor(private _securityService: SecurityService) {}

  users: userDTO[];
  page: number = 1;
  pageSize: number = 10;
  totalAmountOfRecords;

  ngOnInit(): void {
    this._securityService
      .getUsers(this.page, this.pageSize)
      .subscribe((response: HttpResponse<userDTO[]>) => {
        this.users = response.body;
        this.totalAmountOfRecords = response.headers.get(
          'totalAmountOfRecords'
        );
      });
  }

  makeAdmin(userId: string) {
    let user = this.users?.find((x) => x.id == userId);
    this._securityService.makeAdmin(userId).subscribe(() => {
      Swal.fire(
        'Success',
        `User with email ${user.email} is an admin now`,
        'success'
      );
    });
  }

  removeAdmin(userId: string) {
    let user = this.users?.find((x) => x.id == userId);
    this._securityService.removeAdmin(userId).subscribe(() => {
      Swal.fire(
        'Success',
        `User with email ${user.email} is not an admin now`,
        'success'
      );
    });
  }
}
