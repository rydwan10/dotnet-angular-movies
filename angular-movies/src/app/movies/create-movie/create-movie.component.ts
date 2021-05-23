import { Component, OnInit } from '@angular/core';
import { movieCreationDTO } from '../movie.model';

@Component({
  selector: 'app-create-movie',
  templateUrl: './create-movie.component.html',
  styleUrls: ['./create-movie.component.css'],
})
export class CreateMovieComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  saveChanges(movieCreationDTO: movieCreationDTO) {
    console.log(
      '🚀 ~ file: create-movie.component.ts ~ line 15 ~ CreateMovieComponent ~ saveChanges ~ movieCreationDTO',
      movieCreationDTO
    );
  }
}
