import { Component, Input, OnInit, Output } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import Movie from '../../models/movie';


@Component({
  selector: 'app-movies-section',
  templateUrl: './movies-section.component.html',
  styleUrls: ['./movies-section.component.scss'],
})
export class MoviesSectionComponent implements OnInit {
  constructor(private getData: ApiCallService) {}
  movies: any;
  genres: { [key: string]: Movie[] } = {};
  moviesToRender!: any[];
  genresToRender!: any[];

  ngOnInit() {
    this.getData.getMovies().subscribe((data) => {
      this.movies = data;
      this.movies = this.movies.movies;
      this.filterMovies(this.movies);
    });
  }

  filterMovies(movies: Movie[]) {
    movies.forEach((movie) => {
      movie.genres.forEach((genre) => {
        if (!this.genres[genre]) this.genres[genre] = [movie];
        else this.genres[genre].push(movie);
      });
    });
    for (const key in this.genres) {
      if (Object.prototype.hasOwnProperty.call(this.genres, key)) {
        const element = this.genres[key];
        this.moviesToRender
          ? this.moviesToRender.push(element)
          : (this.moviesToRender = [element]);
        this.genresToRender
          ? this.genresToRender.push(key)
          : (this.genresToRender = [key]);
      }
    }
    console.log(this.moviesToRender);
  }


}
