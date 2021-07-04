import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { parseWebAPIErrors } from 'src/app/utilities/utils';
import { firstLetterUppercase } from 'src/app/validators/firstLetterUppercase';
import { genreCreationDTO } from '../genres.model';
import { GenresService } from '../genres.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css'],
})
export class CreateGenreComponent implements OnInit {
  constructor(private router: Router, private _genreService: GenresService) {}

  errors: string[] = [];

  ngOnInit(): void {}

  saveChanges(genreCreationDTO: genreCreationDTO) {
    this._genreService.create(genreCreationDTO).subscribe(
      () => {
        Swal.fire({
          title: 'Genre created successfully!',
          // html: msgErr,
          icon: 'success',
          allowOutsideClick: false,
          showCancelButton: false,
          cancelButtonColor: '#d33',
          confirmButtonText: 'OK',
          customClass: {
            confirmButton: 'confirmButtonCss',
          },
        });
        this.router.navigate(['/genres']);
      },
      (error) => {
        this.errors = parseWebAPIErrors(error);
      }
    );
  }
}
