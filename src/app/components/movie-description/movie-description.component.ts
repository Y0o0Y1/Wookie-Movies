import { Component, OnInit, Input } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { ActivatedRoute } from '@angular/router';
import {faStar} from "@fortawesome/free-solid-svg-icons"
@Component({
  selector: 'app-movie-description',
  templateUrl: './movie-description.component.html',
  styleUrls: ['./movie-description.component.scss'],
})
export class MovieDescriptionComponent implements OnInit {
  constructor(
    private getMovie: ApiCallService,
    private route: ActivatedRoute
  ) {}
  movies: any;
  @Input() movie!: any;
  faStar = faStar

  ngOnInit(): void {
    console.log(this.route.snapshot.url[1].path);
    this.getMovie.getMovies().subscribe((data) => {
      this.movies = data;
      this.movies = this.movies.movies;
      let movie: any;
      movie = this.getIndvidualMovie(
        this.movies,
        this.route.snapshot.url[1].path
      );
      console.log('movie=>', movie);
      this.movie = movie;
    });
  }

  getIndvidualMovie(arrayOfMovies: [], slug: string) {
    let requiredMovie = arrayOfMovies.find((element: any) => {
      if (element.slug === slug) return element;
    });
    return requiredMovie;
  }
}
// background: rgba(0, 0, 0, 0.7) url(https://www.w3schools.com/css/img_mountains.jpg);
// background-size: cover;
// background-blend-mode: darken;
