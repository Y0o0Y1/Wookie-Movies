import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgImageSliderModule } from 'ng-image-slider';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { TopRatedMoviesComponent } from './components/top-rated-movies/top-rated-movies.component';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MoviesSectionComponent } from './components/movies-section/movies-section.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MovieDescriptionComponent } from './components/movie-description/movie-description.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { SearchResultsComponent } from './components/search-results/search-results.component';
const appRoutes: Routes = [
  { path: '', component: MoviesSectionComponent },
  { path: 'movies/:slug', component: MovieDescriptionComponent },
  { path: 'search-results/:searchTerm', component: SearchResultsComponent },

];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    TopRatedMoviesComponent,
    MovieCardComponent,
    MoviesSectionComponent,
    MovieDescriptionComponent,
    SearchResultsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes),
    NgImageSliderModule,
    IvyCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
