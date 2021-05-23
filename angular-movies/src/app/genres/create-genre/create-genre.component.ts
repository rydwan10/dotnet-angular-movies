import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { firstLetterUppercase } from 'src/app/validators/firstLetterUppercase';
import { genreCreationDTO } from '../genres.model';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css'],
})
export class CreateGenreComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  saveChanges(genreCreationDTO: genreCreationDTO) {
    console.log(
      '🚀 ~ file: create-genre.component.ts ~ line 18 ~ CreateGenreComponent ~ saveChanges ~ genreCreationDTO',
      genreCreationDTO
    );
    // Save genre
    this.router.navigate(['/genres']);
  }
}
