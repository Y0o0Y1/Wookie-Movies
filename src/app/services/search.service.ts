import { Injectable } from '@angular/core';
import { Observable ,of} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SerachService {
  [x: string]: any;
  private baseUrl = 'https://wookie.codesubmit.io/movies?q=';
  headers = new HttpHeaders().set('Authorization', 'Bearer Wookie2019');
  constructor(private http: HttpClient) {}
  getMovie(title: string) {
    title.split(" ")
    let movieUrl = (this.baseUrl + title.split(" "));
    let requiredMovie = this.http.get(movieUrl,{
      headers: this.headers,
    });
    console.log(movieUrl)
    return requiredMovie;
  }
}
