import { Component, Input, OnInit } from '@angular/core';
import { SerachService } from 'src/app/services/search.service';
import { Router } from '@angular/router'; // import router from angular router
import Movie from '../../models/movie';

import { map } from 'rxjs/operators';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  resultsToRender!: Movie[];
  title: string = 'asds';
  genres: { [key: string]: Movie[] } = {};
  moviesToRender!: any[];
  genresToRender!: any[];
  movies: any;

  constructor(private search: SerachService, private route: Router) {}
  searchTerm: string = '';
  ngOnInit() {
    this.searchTerm = this.route.url.split('/search-results/')[1];
    this.search.getMovie(this.searchTerm).subscribe((data: any) => {
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
        element.forEach((movie: any) => {
          movie.image = movie.poster;
          movie.thumbImage = movie.poster;
        });
      }
    }

    console.log(this.moviesToRender);
  }
}
