import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  moviesInTheater;
  moviesFutureRelease;

  constructor(private _moviesService: MoviesService) {}

  ngOnInit(): void {
    this._moviesService.getHomePageMovies().subscribe((homeDTO) => {
      this.moviesFutureRelease = homeDTO.upcomingReleases;
      this.moviesInTheater = homeDTO.inTheaters;
    });
  }
}
