import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

// If in docker url should be server instead of localhost
const getNewsUrl = 'http://localhost:3000/News/getNews'
const addNewsUrl = 'http://localhost:3000/News/addNews'
const deleteNewsUrl = 'http://localhost:3000/News/delete/'
const updateNewsUrl = 'http://localhost:3000/News/updateNews'


@Injectable({
  providedIn: 'root'
})
export class NewsService {
  titleToEdit: string = "";

  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get(getNewsUrl)
  }

  deleteNews(title: string) {
    return this.http.delete(deleteNewsUrl + title)
  }

  addNews(news: any) {
    return this.http.post(addNewsUrl, news)
  }

  updateNews(news: any) {
    console.log(news);
    return this.http.put(updateNewsUrl, news)
  }
}