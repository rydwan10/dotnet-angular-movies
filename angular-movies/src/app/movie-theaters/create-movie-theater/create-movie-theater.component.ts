import { Component, OnInit } from '@angular/core';
import { movieTheatersCreationDTO } from '../movie-theaters.model';

@Component({
  selector: 'app-create-movie-theater',
  templateUrl: './create-movie-theater.component.html',
  styleUrls: ['./create-movie-theater.component.css'],
})
export class CreateMovieTheaterComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  saveChanges(movieTheater: movieTheatersCreationDTO) {
    console.log(
      '🚀 ~ file: create-movie-theater.component.ts ~ line 17 ~ CreateMovieTheaterComponent ~ saveChanges ~ movieTheater',
      movieTheater
    );
  }
}
