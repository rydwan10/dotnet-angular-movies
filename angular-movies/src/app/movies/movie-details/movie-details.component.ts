import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { coordinatesMapWithMessage } from 'src/app/utilities/map/coordinate';
import { RatingService } from 'src/app/utilities/rating.service';
import Swal from 'sweetalert2';
import { movieDTO } from '../movie.model';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
})
export class MovieDetailsComponent implements OnInit {
  constructor(
    private _moviesService: MoviesService,
    private activatedRoute: ActivatedRoute,
    private sanitazer: DomSanitizer,
    private _ratingService: RatingService
  ) {}

  movie: movieDTO;
  releaseDate: Date;
  trailerURL: SafeResourceUrl;
  coordinates: coordinatesMapWithMessage[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this._moviesService.getById(param.id).subscribe((movie) => {
        this.movie = movie;
        this.releaseDate = new Date(movie.releaseDate);
        this.trailerURL = this.generateYoutubeURLForEmbeddedVideo(
          movie.trailer
        );
        this.coordinates = movie.movieTheaters.map((movieTheater) => {
          return {
            latitude: movieTheater.latitude,
            longitude: movieTheater.longitude,
            message: movieTheater.name,
          };
        });
      });
    });
  }

  generateYoutubeURLForEmbeddedVideo(url: any): SafeResourceUrl {
    if (!url) {
      return '';
    }

    let videoId = url.split('v=')[1];
    const ampersandPosition = videoId.indexOf('&');
    if (ampersandPosition !== -1) {
      videoId = videoId.substring(0, ampersandPosition);
    }

    return this.sanitazer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${videoId}`
    );
  }

  onRating(rate: number) {
    this._ratingService.rate(this.movie.id, rate).subscribe(() => {
      Swal.fire('Success', 'Your vote has been received!', 'success');
    });
  }
}
