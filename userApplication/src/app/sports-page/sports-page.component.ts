import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { SportsWeather } from './sportsWeather';

@Component({
  selector: 'app-sports-page',
  templateUrl: './sports-page.component.html',
  styleUrls: ['./sports-page.component.css']
})
export class SportsPageComponent implements OnInit {

  constructor(private newsService: NewsService) { }
  allSportsArticleReports: SportsWeather[] = [];
  filter:string = "";

  ngOnInit(): void {
    this.newsService.getSports().subscribe(
      (resposne) =>{
        this.allSportsArticleReports = resposne;
      }, (error)=>{
        
      }
    )
  }

  filterNews(){
    if(this.filter === ""){
      this.ngOnInit();
    } else {
      let filtered = [];
      for (const num in this.allSportsArticleReports){
        if(this.allSportsArticleReports[num].description.search(this.filter) != -1 || this.allSportsArticleReports[num].title.search(this.filter) != -1){
          filtered.push(this.allSportsArticleReports[num]);
        }
      }
      this.allSportsArticleReports = filtered;
    }
  }

  
}
