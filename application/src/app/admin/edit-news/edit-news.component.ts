import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {
  constructor(private router: Router, private newsService:NewsService, private auth: AuthService) { }

  title: string = this.newsService.titleToEdit;
  description: string = "";
  image: string = "";
  publishDate: string = "";
  category: string = "";

  ngOnInit(): void {
    if(this.auth.retrieveUser() == null){
      this.router.navigate(['/login']);
    }
  }

  createNews(){
    let changedNews = {
      title: this.newsService.titleToEdit,
      description: this.description,
      image: this.image,
      publishDate: this.publishDate,
      category: this.category
    }
    this.newsService.updateNews(changedNews).subscribe(
      (response)=> {
        console.log("news was edited");
      }
    );
  
    this.router.navigateByUrl('view-news');
  }

}
