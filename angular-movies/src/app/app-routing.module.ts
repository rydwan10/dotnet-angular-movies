import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateActorsComponent } from './actors/create-actors/create-actors.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { EditGenreComponent } from './genres/edit-genre/edit-genre.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';
import { HomeComponent } from './home/home.component';
import { CreateMovieTheaterComponent } from './movie-theaters/create-movie-theater/create-movie-theater.component';
import { EditMovieTheaterComponent } from './movie-theaters/edit-movie-theater/edit-movie-theater.component';
import { IndexMovieTheatersComponent } from './movie-theaters/index-movie-theaters/index-movie-theaters.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { EditMovieComponent } from './movies/edit-movie/edit-movie.component';

const routes: Routes = [
  // Home
  {
    path: '',
    component: HomeComponent,
  },

  // Genre
  {
    path: 'genres',
    component: IndexGenresComponent,
  },
  {
    path: 'genres/create',
    component: CreateGenreComponent,
  },
  {
    path: 'genres/edit/:id',
    component: EditGenreComponent,
  },

  // Actor
  {
    path: 'actors',
    component: IndexActorsComponent,
  },
  {
    path: 'actors/create',
    component: CreateActorsComponent,
  },
  {
    path: 'actors/edit/:id',
    component: EditActorComponent,
  },

  // Movie Theater
  {
    path: 'movietheaters',
    component: IndexMovieTheatersComponent,
  },
  {
    path: 'movietheaters/create',
    component: CreateMovieTheaterComponent,
  },
  {
    path: 'movietheaters/edit/:id',
    component: EditMovieTheaterComponent,
  },

  // Movie
  { path: 'movies/create', component: CreateMovieComponent },
  {
    path: 'movies/edit/:id',
    component: EditMovieComponent,
  },

  // Wildcard Route
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
