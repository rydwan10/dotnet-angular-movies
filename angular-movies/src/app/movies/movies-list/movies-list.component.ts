import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
  @Input() movies: [] = [];
  @Output() onDelete = new EventEmitter<void>();

  ngOnInit(): void {}

  constructor(private _moviesService: MoviesService) {}

  remove(id: number) {
    this._moviesService.delete(id).subscribe(() => {
      this.onDelete.emit();
    });
  }
}
