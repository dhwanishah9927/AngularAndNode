import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NewsService } from 'src/app/services/news.service';
import { News } from './news';

@Component({
  selector: 'app-view-news',
  templateUrl: './view-news.component.html',
  styleUrls: ['./view-news.component.css']
})
export class ViewNewsComponent implements OnInit {
  allNews:News[]=[];
  searchQuery:string='';
  news={
    title:"",
    description: "",
    image: "",
    publishDate : "", 
    category: ""
}

  constructor(private newsService: NewsService, private router:Router, private auth: AuthService) { }

  ngOnInit(): void {
    if(this.auth.retrieveUser() == null){
      this.router.navigate(['/login']);
    }
    this.newsService.getNews().subscribe(news => { 
      this.allNews = news as News[]
    })

  }


  onDeleteNews(title:string){
    var response = confirm("Do you confirm to delete the News..?")
    console.log(this.newsService.deleteNews(title));
    this.newsService.deleteNews(title).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl('/view-news');
    }); 
  }


  updateNews(news: any){
    this.newsService.titleToEdit = news.title;
    this.router.navigateByUrl('edit-news');
  }

}
