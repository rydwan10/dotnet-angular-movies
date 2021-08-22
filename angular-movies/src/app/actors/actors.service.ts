import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { formatDateFormData } from '../utilities/utils';
import { actorCreationDTO, actorDTO, actorsMovieDTO } from './actors.model';

@Injectable({
  providedIn: 'root',
})
export class ActorsService {
  constructor(private http: HttpClient) {}

  private apiUrl = environment.apiURL + '/actors';

  get(page: number, recordsPerPage: number): Observable<any> {
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('recordsPerPage', recordsPerPage.toString());
    return this.http.get<actorDTO[]>(this.apiUrl, {
      observe: 'response',
      params,
    });
  }

  getById(id: number): Observable<actorDTO> {
    return this.http.get<actorDTO>(`${this.apiUrl}/${id}`);
  }

  searchByName(name: string): Observable<actorsMovieDTO[]> {
    const headers = new HttpHeaders('Content-Type: application/json');
    return this.http.post<actorsMovieDTO[]>(
      `${this.apiUrl}/searchByName`,
      JSON.stringify(name),
      { headers: headers }
    );
  }

  create(actor: actorCreationDTO) {
    const formData = this.buildFormData(actor);
    return this.http.post(this.apiUrl, formData);
  }

  edit(id: number, actor: actorCreationDTO) {
    const formData = this.buildFormData(actor);
    return this.http.put(`${this.apiUrl}/${id}`, formData);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  private buildFormData(actor: actorCreationDTO) {
    const formData = new FormData();

    formData.append('name', actor.name);
    if (actor.biography) {
      formData.append('biography', actor.biography);
    }

    if (actor.dateOfBirth) {
      formData.append('dateOfBirth', formatDateFormData(actor.dateOfBirth));
    }

    if (actor.picture) {
      formData.append('picture', actor.picture);
    }

    return formData;
  }
}
