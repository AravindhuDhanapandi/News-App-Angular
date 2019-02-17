import { Component, OnInit } from '@angular/core';
import {NewsService} from './news.service';
import {Observable} from 'rxjs';;
import {map} from 'rxjs/operators';
import { RouterModule, Routes } from '@angular/router';
import { NewsPageComponent } from './news-page/news-page.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  results: Observable<any>;
  title = 'my-app';
  constructor(private newsService:NewsService) { }

  ngOnInit() {

  }



}
