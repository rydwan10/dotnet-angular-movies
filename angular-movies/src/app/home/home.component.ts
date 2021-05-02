import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  moviesInTheater;
  moviesFutureRelease;

  constructor() {}

  ngOnInit(): void {
    this.moviesInTheater = [
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

    this.moviesFutureRelease = [];
  }
}
