import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  private apiUrl = 'https://wookie.codesubmit.io/movies';
  headers = new HttpHeaders().set('Authorization', 'Bearer Wookie2019');
  constructor(private http: HttpClient) {}
  getMovies() {
    return this.http.get(this.apiUrl, {
      headers: this.headers,
    });
  }
  
}
