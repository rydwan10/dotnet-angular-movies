import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  movieTheatersCreationDTO,
  movieTheatersDTO,
} from '../movie-theaters.model';

@Component({
  selector: 'app-edit-movie-theater',
  templateUrl: './edit-movie-theater.component.html',
  styleUrls: ['./edit-movie-theater.component.css'],
})
export class EditMovieTheaterComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  model: movieTheatersDTO = {
    name: 'lorem ipsum dolor sit amet',
    latitude: -6.313101805412789,
    longitude: -253.17512512207034,
  };

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      // console.log(params.id);
    });
  }

  saveChanges(movieTheater: movieTheatersCreationDTO) {
    console.log(
      '🚀 ~ file: edit-movie-theater.component.ts ~ line 24 ~ EditMovieTheaterComponent ~ saveChanges ~ movieTheater',
      movieTheater
    );
  }
}
