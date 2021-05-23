import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-movie-filter',
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css'],
})
export class MovieFilterComponent implements OnInit {
  form: FormGroup;
  genres = [
    { id: 1, name: 'Drama' },
    { id: 2, name: 'Comedy' },
    { id: 3, name: 'Action' },
  ];

  movies = [
    {
      title: 'The Dark Knight',
      releaseDate: new Date(),
      price: 1200,
      poster:
        'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg',
    },
    {
      title: 'Avengers: Endgame',
      releaseDate: new Date(),
      price: 300,
      poster:
        'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
    },
    {
      title: 'Pirates of the Caribbean: Dead Men Tell No Tales',
      releaseDate: new Date(),
      price: 210,
      poster:
        'https://m.media-amazon.com/images/M/MV5BMTYyMTcxNzc5M15BMl5BanBnXkFtZTgwOTg2ODE2MTI@._V1_UX182_CR0,0,182,268_AL_.jpg',
    },
  ];

  originalMovies = this.movies;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      title: '',
      genreId: 0,
      upcomingReleases: false,
      inTheaters: false,
    });

    this.form.valueChanges.subscribe((values) => {
      this.movies = this.originalMovies;
      this.filterMovies(values);
    });
  }

  filterMovies(values: any) {
    if (values.title) {
      this.movies = this.movies.filter(
        (movie) => movie.title.indexOf(values.title) !== -1
      );
    }
  }

  clearForm() {
    this.form.reset();
  }
}
