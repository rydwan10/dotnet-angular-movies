import { movieDTO } from '../movies/movie.model';

export interface movieTheatersCreationDTO {
  name: string;
  latitude: number;
  longitude: number;
}

export interface movieTheatersDTO {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
}

export interface homeDTO {
  inTheaters: movieDTO[];
  upcomingReleases: movieDTO[];
}
