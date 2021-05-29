import { Component, Input, OnInit } from '@angular/core';
import { SerachService } from '../../services/search.service';
import { Router } from '@angular/router';
import {faStar} from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() title: string = '';
  @Input() imgSrc: string = '';
  @Input() movieRating: string = '';
  @Input() slug: string = '';
  faStar=faStar
  constructor(private search: SerachService, private router: Router) {}
  ngOnInit(): void {}

}
