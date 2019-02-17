import { Component, OnInit } from '@angular/core';
import {NewsService} from './../news.service';
import {Observable} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private newsService:NewsService) { }

  ngOnInit() {

  }
}
