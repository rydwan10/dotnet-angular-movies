import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { actorDTO } from '../actors.model';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-index-actors',
  templateUrl: './index-actors.component.html',
  styleUrls: ['./index-actors.component.css'],
})
export class IndexActorsComponent implements OnInit {
  constructor(private _actorService: ActorsService) {}

  actors: actorDTO[];
  totalAmountOfRecords;
  currentPage: number = 1;
  pageSize: number = 5;

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this._actorService.get(this.currentPage, this.pageSize).subscribe(
      (response: HttpResponse<actorDTO[]>) => {
        this.actors = response.body;
        this.totalAmountOfRecords = response.headers.get(
          'totalAmountOfRecords'
        );
      },
      (err) => {
        console.log('🍟🍟Something went wrong', err);
      }
    );
  }

  updatePagination(pageEvent: PageEvent) {
    this.currentPage = pageEvent.pageIndex + 1;
    this.pageSize = pageEvent.pageSize;
    this.loadData();
  }
  saveChanges() {}

  delete(id: number) {
    this._actorService.delete(id).subscribe(() => {
      this.loadData();
    });
  }
}
