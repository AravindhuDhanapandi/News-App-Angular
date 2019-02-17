import { Component, OnInit } from '@angular/core';
import {NewsService} from './../news.service';
import {Observable} from 'rxjs';;
import {map} from 'rxjs/operators';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Pipe({
  name: 'async',
})
@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent implements OnInit {
 information:any;
 content:any;
 ex:any;
 personID:any='';
  constructor(private newsService:NewsService,private _Activatedroute:ActivatedRoute) { }

  ngOnInit() {
    this.personID =this._Activatedroute.snapshot.params['id'];
    console.log(this.personID);
    if(this.personID=='cnn'){
      this.newsService.getDetails('cnn').subscribe(results=>{
        console.log('hi',results);
        this.information=results;
      });
    }
    else if(this.personID=='the-hindu'){
      this.newsService.getDetails('the-hindu').subscribe(results=>{
        console.log('hi',results);
        this.information=results;
      });
  }
  else if(this.personID=='the-new-york-times'){
    this.newsService.getDetails('the-new-york-times').subscribe(results=>{
      console.log('hi',results);
      this.information=results;
    });
}
else if(this.personID=='google-news-uk'){
  this.newsService.getDetails('google-news-uk').subscribe(results=>{
    console.log('hi',results);
    this.information=results;
  });
}

else if(this.personID=='rte'){
  this.newsService.getDetails('rte').subscribe(results=>{
    console.log('hi',results);
    this.information=results;
  });
}
else if(this.personID=='axios'){
  this.newsService.getDetails('axios').subscribe(results=>{
    console.log('hi',results);
    this.information=results;
  });
}
else if(this.personID=='bbc-news'){
  this.newsService.getDetails('bbc-news').subscribe(results=>{
    console.log('hi',results);
    this.information=results;
  });
}
else if(this.personID=='fox-news'){
  this.newsService.getDetails('fox-news').subscribe(results=>{
    console.log('hi',results);
    this.information=results;
  });
}
}
}
