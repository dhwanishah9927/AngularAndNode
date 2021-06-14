import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { News } from 'src/models/News';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-three-latest-news',
  templateUrl: './three-latest-news.component.html',
  styleUrls: ['./three-latest-news.component.css']
})
export class ThreeLatestNewsComponent implements OnInit {

  allNews:News[]=[];

  constructor(private newsService: NewsService, private router:Router) { }

  ngOnInit(): void {

    this.newsService.getNews().subscribe(news => { 
      this.allNews = news as News[]
    })

  }
}
