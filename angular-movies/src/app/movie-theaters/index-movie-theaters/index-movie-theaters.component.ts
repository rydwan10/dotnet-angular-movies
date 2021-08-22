import { Component, OnInit } from '@angular/core';
import { MovieTheatersService } from '../movie-theaters.service';

@Component({
  selector: 'app-index-movie-theaters',
  templateUrl: './index-movie-theaters.component.html',
  styleUrls: ['./index-movie-theaters.component.css'],
})
export class IndexMovieTheatersComponent implements OnInit {
  constructor(private _movieTheatersService: MovieTheatersService) {}

  movieTheaters;

  ngOnInit(): void {
    this.loadData();
  }

  delete(id: number) {
    this._movieTheatersService.delete(id).subscribe(() => {
      this.loadData();
    });
  }

  loadData() {
    this._movieTheatersService
      .get()
      .subscribe((movieTheaters) => (this.movieTheaters = movieTheaters));
    console.log(this.movieTheaters);
  }
}
