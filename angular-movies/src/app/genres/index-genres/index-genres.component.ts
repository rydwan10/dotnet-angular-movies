import { Component, OnInit } from '@angular/core';
import { genreDTO } from '../genres.model';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-index-genres',
  templateUrl: './index-genres.component.html',
  styleUrls: ['./index-genres.component.css'],
})
export class IndexGenresComponent implements OnInit {
  genres: genreDTO[];
  columnsToDisplay = ['name', 'actions'];

  constructor(private _genreService: GenresService) {}

  ngOnInit(): void {
    this.loadGenres();
  }

  loadGenres() {
    this._genreService.getAll().subscribe((genres) => {
      this.genres = genres;
    });
  }

  delete(id: number) {
    this._genreService.delete(id).subscribe(() => {
      this.loadGenres();
    });
  }
}
