import { Component, OnInit, Input } from '@angular/core';
import { SerachService } from '../../services/search.service';
import { Router } from '@angular/router'; // import router from angular router

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() title!: string;
  constructor(private route: Router) {}

  ngOnInit(): void {}
}
