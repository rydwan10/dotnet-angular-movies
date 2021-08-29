import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {
  homeDTO,
  movieTheatersCreationDTO,
  movieTheatersDTO,
} from './movie-theaters.model';

@Injectable({
  providedIn: 'root',
})
export class MovieTheatersService {
  constructor(private http: HttpClient) {}

  private apiURL = environment.apiURL + '/movietheaters';

  public get(): Observable<movieTheatersDTO[]> {
    return this.http.get<movieTheatersDTO[]>(this.apiURL);
  }

  public getById(id: number): Observable<movieTheatersDTO> {
    return this.http.get<movieTheatersDTO>(`${this.apiURL}/${id}`);
  }

  public create(movieTheatersCreationDTO: movieTheatersCreationDTO) {
    return this.http.post(this.apiURL, movieTheatersCreationDTO);
  }

  public edit(id: number, movieTheatersCreationDTO: movieTheatersCreationDTO) {
    return this.http.put(`${this.apiURL}/${id}`, movieTheatersCreationDTO);
  }

  public delete(id: number) {
    return this.http.delete(`${this.apiURL}/${id}`);
  }
}
