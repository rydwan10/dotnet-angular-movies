import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { movieTheatersCreationDTO } from '../movie-theaters.model';
import { MovieTheatersService } from '../movie-theaters.service';

@Component({
  selector: 'app-create-movie-theater',
  templateUrl: './create-movie-theater.component.html',
  styleUrls: ['./create-movie-theater.component.css'],
})
export class CreateMovieTheaterComponent implements OnInit {
  constructor(
    private _movieTheatersService: MovieTheatersService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  saveChanges(movieTheatersCreationDTO: movieTheatersCreationDTO) {
    this._movieTheatersService
      .create(movieTheatersCreationDTO)
      .subscribe(() => {
        this.router.navigate(['/movietheaters']);
      });
  }
}
