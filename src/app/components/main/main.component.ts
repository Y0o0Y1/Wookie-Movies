import { Router } from '@angular/router'; // import router from angular router
import { Component, OnInit } from '@angular/core';
import { SerachService } from 'src/app/services/search.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  constructor(private search: SerachService, private route: Router) {}

  ngOnInit(): void {}

  handleChange(event: any) {
    let data = this.search
      .getMovie(event.target.value)
      .subscribe((data: any) => {});
    this.route.navigate(['/', 'search-results', event.target.value]);
    event.target.value = '';
    return data;
  }
  formHandler(event: any) {
    event.preventDefault();
  }
}
